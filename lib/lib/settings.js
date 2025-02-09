"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.anilibria = void 0;
const axios_1 = __importDefault(require("axios"));
exports.anilibria = axios_1.default.create({
    baseURL: "https://anilibria.top/api/v1"
});
