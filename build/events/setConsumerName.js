"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setConsumerName = void 0;
const setConsumerName = (consumerName) => {
    return `${consumerName}-${process.env.SERVICE_NAME}`;
};
exports.setConsumerName = setConsumerName;
