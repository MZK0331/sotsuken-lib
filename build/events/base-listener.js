"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractListener = void 0;
const nats_1 = require("nats");
class AbstractListener {
    constructor(jsm, js) {
        this.jsm = jsm;
        this.js = js;
        this.sc = (0, nats_1.StringCodec)();
    }
    generateConsumerConfig() {
        return {
            durable_name: this.consumerName,
            deliver_policy: nats_1.DeliverPolicy.All,
            ack_policy: nats_1.AckPolicy.Explicit,
            filter_subject: this.subject,
            max_ack_pending: 30,
            ack_wait: 5000000000
        };
    }
    createStream() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const streamInfo = yield this.jsm.streams.info(this.streamName);
                console.log(`Stream already exists ${streamInfo.config.name}-${streamInfo.config.subjects}`);
            }
            catch (err) {
                yield this.jsm.streams.add({
                    name: this.streamName,
                    subjects: [this.subject]
                });
                console.log(`Stream adding: ${this.streamName}-${this.subject}`);
            }
        });
    }
    createConsumer() {
        return __awaiter(this, void 0, void 0, function* () {
            let existingConsumer = false;
            let consumerCfg;
            try {
                const consumerInfo = yield this.jsm.consumers.info(this.streamName, this.consumerName);
                existingConsumer = true;
                console.log(`Existing ${this.consumerName} counsumer found`);
                consumerCfg = this.generateConsumerConfig();
            }
            catch (err) {
                consumerCfg = this.generateConsumerConfig();
                yield this.jsm.consumers.add(this.streamName, consumerCfg);
                console.log("Created consumer");
            }
            console.log(`Deliver Policy: ${consumerCfg.deliver_policy}`);
            return yield this.js.consumers.get(this.streamName, this.consumerName);
        });
    }
    consume(consumer) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, e_1, _b, _c;
            console.log('Starting message consumeption...');
            const messages = yield consumer.consume();
            try {
                for (var _d = true, messages_1 = __asyncValues(messages), messages_1_1; messages_1_1 = yield messages_1.next(), _a = messages_1_1.done, !_a; _d = true) {
                    _c = messages_1_1.value;
                    _d = false;
                    const m = _c;
                    console.log(`Recived message [${m.seq}] [${m.subject}]: `
                        + this.sc.decode(m.data));
                    const parsedData = JSON.parse(this.sc.decode(m.data));
                    this.onMessage(parsedData, m);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = messages_1.return)) yield _b.call(messages_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.createStream();
            const consumer = yield this.createConsumer();
            this.consume(consumer);
        });
    }
}
exports.AbstractListener = AbstractListener;
