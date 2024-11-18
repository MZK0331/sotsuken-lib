export declare const natsSetup: () => Promise<{
    nc: import("nats").NatsConnection;
    jsm: import("nats").JetStreamManager;
    js: import("nats").JetStreamClient;
}>;
