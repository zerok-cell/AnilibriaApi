"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password = void 0;
const axios_1 = __importDefault(require("axios"));
class Password {
    urlPassword;
    constructor() {
        this.urlPassword = "https://anilibria.top/api/v1/accounts/users/auth/password/";
    }
    /**
     * Changes your password.
     * The user must be logged in
     */
    swapPasswordWithUseToken = async (token, password, passwordConfirmation) => {
        const request = await axios_1.default.post(`${this.urlPassword}reset/`, {
            password,
            password_confirmation: passwordConfirmation,
            token
        });
        return request.status;
    };
    sendEmail = async (email) => {
        const request = await axios_1.default.post(`${this.urlPassword}forget/`, {
            email
        });
        return request.status;
    };
}
exports.Password = Password;
