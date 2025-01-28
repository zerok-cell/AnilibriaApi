"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authUser = exports.UserSchema = void 0;
const zod_1 = require("zod");
exports.UserSchema = zod_1.z.object({
    login: zod_1.z.string().nonempty().readonly(),
    password: zod_1.z.string().nonempty().readonly(),
});
exports.authUser = zod_1.z.function().args(exports.UserSchema);
