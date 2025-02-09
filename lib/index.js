"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User/User");
const main = async () => {
    const user = new User_1.User("zerok-cell", "Duplex007");
    try {
        const result = await user.authorize();
        // const ref = new  References(user.tokenGet)
        // const age = await ref.genRes()
        const deauth = user.logout();
        console.log(user.tokenGet);
    }
    catch (error) {
        console.error("Ошибка авторизации:", error);
    }
};
main();
