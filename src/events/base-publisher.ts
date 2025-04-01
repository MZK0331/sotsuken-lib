import { Codec, JetStreamClient, StringCodec } from "nats";

import { E_Subjects } from "./enums/subjects";


interface EventPublisher {
    subject: E_Subjects
    data: any
}


export abstract class AbstractPublisher<T extends EventPublisher> {
    protected abstract readonly subject: T['subject']
    protected js: JetStreamClient
    private sc: Codec<string>

    constructor(js: JetStreamClient) {
        this.js = js
        this.sc = StringCodec()
    }

    async publish(data: T['data']) {
        try {
            await this.js.publish(
                this.subject,
                this.sc.encode(JSON.stringify(data))
            )
            console.log(`Published message: ${this.subject}`)
        } catch (err) {
            if (err) return console.log(err)
                
            console.error(`Error: Event published to subject: ${this.subject}`)
        }
    }
}