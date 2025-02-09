"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const settings_1 = require("../lib/settings");
/**
 * @author Murad Shakhsinov
 * @description A class for interacting with endpoints related to the entrance user's account It is mandatory to accept
 * the password and email address of the `anilibria` user.
 * @param {string} [login] User name on anilibria
 * @param {string} [password] Anilibria login password
 * @example const user = User("my_login", "my_password")
 * @version 1.0.0
 * @since 1.0.0
 */
class User {
    token;
    login;
    password;
    constructor(login, password) {
        this.login = login;
        this.password = password;
    }
    /**
     * @description issues you a private token
     * @example
     * const index = async () => {
     *   const user = User("my_login", "my_password")
     *   const token = user.tokenGet
     * }
     * @return {{ tokenBearer:string,token:string }}
     */
    get tokenGet() {
        const tokenBearer = settings_1.anilibria.defaults.headers.common.Authorization;
        const token = settings_1.anilibria.defaults.headers.common.Authorization;
        return { tokenBearer, token: token.slice(7) };
    }
    /**
     * @description authorize the user using the login and password data that you passed to the instance of the class
     * @example
     * @example
     * const index = async () =>{
     *   const user = User("my_login", "my_password")
     *   const result = await user.authorize()
     * }
     *  @returns {Promise<DataAndStatus<Record<string, string>>} The operation status (http code)
     *  and the data received as a result of the request
     *  @version 1.0.1
     *
     *
     */
    authorize = async () => {
        const { status, data } = await settings_1.anilibria.post(`/accounts/users/auth/login`, {
            login: this.login,
            password: this.password
        });
        this.token = data.token;
        settings_1.anilibria.defaults.headers.common.Authorization = "Bearer " + this.token;
        return { data, status };
    };
    /**
     * @description Makes the user log out by `deleting` the token from the instance
     * @description It won't work if there is no token.
     * @returns {Promise<DataAndStatus<Record<string, any>>>} | Status code(http) or `{data:string, status:number}`
     * @throws {Error} The error may be related to the internal structure of the code, how you use this method,
     * or an error in the request.
     * @version 1.0.1
     */
    logout = async () => {
        if (settings_1.anilibria.defaults.headers.common.Authorization) {
            try {
                const { data, status } = await settings_1.anilibria.post(`/accounts/users/auth/logout`);
                this.token = undefined;
                settings_1.anilibria.defaults.headers.common.Authorization = undefined;
                return { data, status };
            }
            catch (error) {
                throw new Error(`There's been some kind of mistake. - ${error}`);
            }
        }
        else {
            return { data: "The token was not found in the instance, you may not be registered.", status: 401 };
        }
    };
}
exports.User = User;
