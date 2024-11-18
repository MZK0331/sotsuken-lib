import { JetStreamClient } from "nats";
import { E_Subjects } from "./enums/subjects";
interface EventPublisher {
    subject: E_Subjects;
    data: any;
}
export declare abstract class AbstractPublisher<T extends EventPublisher> {
    protected abstract readonly subject: T['subject'];
    protected js: JetStreamClient;
    private sc;
    constructor(js: JetStreamClient);
    publish(data: T['data']): Promise<void>;
}
export {};
