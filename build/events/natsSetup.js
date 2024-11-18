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
Object.defineProperty(exports, "__esModule", { value: true });
exports.natsSetup = void 0;
const nats_1 = require("nats");
const natsSetup = () => __awaiter(void 0, void 0, void 0, function* () {
    const nc = yield (0, nats_1.connect)({ servers: 'htpp://localhost:4222' });
    const jsm = yield nc.jetstreamManager();
    const js = nc.jetstream();
    process.on('SIGINT', () => __awaiter(void 0, void 0, void 0, function* () { return yield nc.close(); }));
    process.on('SIGTERM', () => __awaiter(void 0, void 0, void 0, function* () { return yield nc.close(); }));
    process.on('exit', () => __awaiter(void 0, void 0, void 0, function* () { return yield nc.close(); }));
    return { nc, jsm, js };
});
exports.natsSetup = natsSetup;
