import { JetStreamClient, JetStreamManager, JsMsg } from "nats";
import { E_Subjects } from "./enums/subjects";
import { E_Streams } from "./enums/streams";
export interface EventListener {
    readonly consumerName: string;
    readonly streamName: E_Streams;
    readonly subject: E_Subjects;
    readonly data: any;
}
export declare abstract class AbstractListener<T extends EventListener> {
    protected readonly abstract consumerName: string;
    protected readonly abstract streamName: T['streamName'];
    protected readonly abstract subject: T['subject'];
    abstract onMessage(data: T['data'], msg: JsMsg): void;
    protected jsm: JetStreamManager;
    protected js: JetStreamClient;
    private sc;
    constructor(jsm: JetStreamManager, js: JetStreamClient);
    private generateConsumerConfig;
    private createStream;
    private createConsumer;
    private consume;
    listen(): Promise<void>;
}
