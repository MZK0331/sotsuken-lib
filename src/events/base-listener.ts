import {
    AckPolicy,
    Codec,
    Consumer,
    ConsumerConfig,
    DeliverPolicy,
    JetStreamClient,
    JetStreamManager,
    JsMsg,
    StringCodec
} from "nats"

import { E_Subjects } from "./enums/subjects"
import { E_Consumer } from "./enums/consumer"
import { E_Streams } from "./enums/streams"


export interface EventListener {
    readonly consumerName: string
    readonly streamName: E_Streams
    readonly subject: E_Subjects
    readonly data: any
}


export abstract class AbstractListener<T extends EventListener> {
    protected readonly abstract consumerName: string
    protected readonly abstract streamName: T['streamName']
    protected readonly abstract subject: T['subject']
    public abstract onMessage(data: T['data'], msg: JsMsg): void
    protected jsm: JetStreamManager
    protected js: JetStreamClient
    private sc: Codec<string>
    
    constructor(jsm: JetStreamManager, js: JetStreamClient) {
        this.jsm = jsm
        this.js = js
        this.sc = StringCodec()
    }

    private generateConsumerConfig(): Partial<ConsumerConfig> {
        return {
            durable_name: this.consumerName,
            deliver_policy: DeliverPolicy.All,
            ack_policy: AckPolicy.Explicit,
            filter_subject: this.subject,
            max_ack_pending: 30,
            ack_wait: 5_000_000_000
        }
    }

    private async createStream() {
        try {
            const streamInfo = await this.jsm.streams.info(this.streamName)
            console.log(`Stream already exists ${streamInfo.config.name}-${streamInfo.config.subjects}`)
        } catch (err) {
            await this.jsm.streams.add({
                name: this.streamName,
                subjects: [this.subject]
            })
            console.log(`Stream adding: ${this.streamName}-${this.subject}`)
        }
    }

    private async createConsumer() {
        let existingConsumer = false
        let consumerCfg: Partial<ConsumerConfig>
        try {
            const consumerInfo = await this.jsm.consumers.info(
                this.streamName,
                this.consumerName
            )
            existingConsumer = true
            console.log(`Existing ${this.consumerName} counsumer found`)
    
            consumerCfg = this.generateConsumerConfig()
        } catch (err) {
            consumerCfg = this.generateConsumerConfig()
            await this.jsm.consumers.add(
                this.streamName,
                consumerCfg
            )
            console.log("Created consumer")
        }
    
        console.log(`Deliver Policy: ${consumerCfg.deliver_policy}`)
        
        return await this.js.consumers.get(
            this.streamName,
            this.consumerName
        )
    }

    private async consume(consumer: Consumer) {
        console.log('Starting message consumeption...')
        const messages = await consumer.consume()
    
        for await (const m of messages) {
            console.log(
                `Recived message [${m.seq}] [${m.subject}]: `
                + this.sc.decode(m.data)
            )

            const parsedData = JSON.parse(this.sc.decode(m.data))
            this.onMessage(parsedData, m)
        }
    }

    public async listen() {
        await this.createStream()
        const consumer = await this.createConsumer()
        this.consume(consumer)
    }
}