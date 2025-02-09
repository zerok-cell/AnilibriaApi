"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password = void 0;
const settings_1 = require("../lib/settings");
// TODO протестировать класс
/**
 * @description A class for working with the functionality of changing and restoring a user's password.
 * @experimental The class has not been tested yet. It is unstable
 */
class Password {
    /**
     * @description Changes your password.The user must be logged in
     * @param token Token
     * @param password Password user
     * @param passwordConfirmation Confirmation password
     */
    swapPasswordWithUseToken = async (token, password, passwordConfirmation) => {
        const { status, data } = await settings_1.anilibria.post(`/accounts/users/auth/password/reset/`, {
            password,
            password_confirmation: passwordConfirmation,
            token
        });
        return { status, data };
    };
    /**
     * @description Send mail on your email.
     * @param email Email
     */
    sendEmail = async (email) => {
        const { status, data } = await settings_1.anilibria.post(`/accounts/users/auth/password/forget/`, {
            email
        });
        return { status, data };
    };
}
exports.Password = Password;
