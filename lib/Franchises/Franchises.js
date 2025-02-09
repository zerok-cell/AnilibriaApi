"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const read_config_1 = require("../lib/read_config");
const Base_1 = require("../User/Base");
class franchises extends Base_1.BaseInstrumental {
    constructor() {
        super("", (0, read_config_1.configLoad)().app.url);
    }
    franchises = async () => {
    };
}
