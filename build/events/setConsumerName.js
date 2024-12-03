"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setConsumerName = void 0;
const crypto_1 = require("crypto");
const setConsumerName = (consumerName) => {
    return `${consumerName}-${(0, crypto_1.randomUUID)()}`;
};
exports.setConsumerName = setConsumerName;
