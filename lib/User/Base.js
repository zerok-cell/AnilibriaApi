"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseInstrumental = void 0;
const axios_1 = __importDefault(require("axios"));
/**
 * @description Basic functionality for library classes. It is not intended for non-library use.
 * @description It should only be used for inheritance, because its methods are only available
 * in the class. Transfer the token via super
 * @param token You can get it using the User instance and its tokenGet getter.
 * @param url The address that this class will work with
 *
 * @see tokenGet
 *
 */
class BaseInstrumental {
    token;
    barerToken;
    urlReferences;
    constructor(token, url) {
        this.token = token;
        this.barerToken = "Bearer " + token;
        this.urlReferences = url;
    }
    /**
     *
     * @param m Method request from axios, example GET,POST,DELETE and many others type request
     * @param br To send or not to send a bearer token. A bearer token is a token derived from the addition string of
     * the bearer and the token instance that you passed to the constructor.
     * @param url The endpoint of the request address.  The request address is derived from the addition of the address
     * that you passed to the constructor and that you passed here.
     * If the address that you passed to the constructor is for example `https://example.com/` and the url parameter is
     * equal to `bar`, then the final request address will be equal to
     * `https://example.com/bar`
     * @param d Data in the form of {key:value}
     * @returns {Promise<Record<any,any>>} Status code(http code) and the data that came from the server
     */
    requestUrl = async (m, br, url, d) => {
        const { status, data } = await axios_1.default.request({
            url: this.urlReferences + url,
            method: m, data: d, headers: {
                "Authorization": br && this.barerToken,
                "Content-Type": "application/json"
            }
        });
        return { status, data };
    };
}
exports.BaseInstrumental = BaseInstrumental;
