"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOfCollectionsSchema = void 0;
const zod_1 = require("zod");
exports.TypeOfCollectionsSchema = zod_1.z.enum(["PLANNED", "WATCHED", "WATCHING", "POSTPONED", "ABANDONED"]);
