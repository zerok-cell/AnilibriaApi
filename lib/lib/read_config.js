"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configLoad = exports.ConfigSchema = void 0;
const fs_1 = __importDefault(require("fs"));
const js_yaml_1 = __importDefault(require("js-yaml"));
const path_1 = __importDefault(require("path"));
const zod_1 = require("zod");
exports.ConfigSchema = zod_1.z.object({
    app: zod_1.z.object({
        url: zod_1.z.string().nonempty(),
    })
});
const configPath = path_1.default.join(__dirname, "config.yaml");
/**
 * @description Use exclusively inside THE library IS `NOT INTENDED FOR OUTDOOR USE`
 * @return {ConfigType} Returns the config
 */
const configLoad = () => {
    const file = fs_1.default.readFileSync(configPath, "utf8");
    return js_yaml_1.default.load(file);
};
exports.configLoad = configLoad;
