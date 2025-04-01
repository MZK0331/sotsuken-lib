import { connect, NatsConnection } from "nats"


export const natsSetup = async (url: string = 'http://localhost:4222') => {
    const nc = await connect({        
        servers: url
    })
    const jsm = await nc.jetstreamManager()
    const js = nc.jetstream()

    return { nc, jsm, js }
}
