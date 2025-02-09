"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vast = vast;
exports.chain = chain;
const axios_1 = __importDefault(require("axios"));
const read_config_1 = require("../lib/read_config");
async function vast() {
    const config = (0, read_config_1.configLoad)();
    const { status, data } = await axios_1.default.get(config.app.url + "ads/vasts");
    return { status, data };
}
async function chain() {
    const config = (0, read_config_1.configLoad)();
    const { status, data } = await axios_1.default.get(config.app.url + "ads/vasts/chain");
    return { status, data };
}
const x = chain().then((d) => {
    console.log(d);
});
