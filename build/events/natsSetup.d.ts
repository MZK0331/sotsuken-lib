import { NatsConnection } from "nats";
export declare const natsSetup: () => Promise<{
    nc: NatsConnection;
    jsm: import("nats").JetStreamManager;
    js: import("nats").JetStreamClient;
}>;
