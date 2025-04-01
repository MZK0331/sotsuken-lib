import { E_Consumer } from "./enums/consumer"


export const setConsumerName = (consumerName: keyof typeof E_Consumer) => {
    return `${consumerName}-${process.env.SERVICE_NAME}`
}