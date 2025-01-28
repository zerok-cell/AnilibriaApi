"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
// Загружаем переменные окружения из .env файла
dotenv_1.default.config();
class User {
    privateToken;
    login;
    password;
    urlUser;
    constructor(login, password) {
        this.login = login;
        this.password = password;
        this.urlUser = "https://anilibria.top/api/v1/accounts/users/auth/";
    }
    get token() {
        return this.privateToken;
    }
    authorize = async () => {
        const fetchUrl = await axios_1.default.post(`${this.urlUser}login/`, {
            login: this.login,
            password: this.password
        });
        this.privateToken = fetchUrl.data.token;
        return { status: fetchUrl.status, token: this.privateToken };
    };
    deauthorize = async () => {
        if (this.privateToken) {
            try {
                const fetchUrl = await axios_1.default.post(`${this.urlUser}logout/`, {}, {
                    headers: {
                        "Authorization": `Bearer ${this.privateToken}`
                    }
                });
                this.privateToken = undefined;
                return fetchUrl.status;
            }
            catch (error) {
                return error;
            }
        }
        else {
            return "Nothing token";
        }
    };
}
exports.User = User;
// const main = async () => {
//   const user = new User("zerok-cell", "Duplex007");
//
//   try {
//     const result = await user.authorize();
//     console.log(result);
//   } catch (error) {
//     console.error("Ошибка авторизации:", error);
//   }
// };
//
// main();
