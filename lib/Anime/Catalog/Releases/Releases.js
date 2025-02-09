"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.releases = releases;
const axios_1 = __importDefault(require("axios"));
const read_config_1 = require("../../../lib/read_config");
const releases_type_1 = require("../../../zod_scheme/releases.type");
/**
 *
 * @see ReleaseSchema
 * @example
 * const data = releases({
 *   page: "1",
 *   limit: 10,
 *   f: {
 *     genres: [1, 2, 3],
 *     types: "MOVIE",
 *     seasons: "summer",
 *     years: {
 *       from_year: 2020,
 *       to_year: 2023
 *     },
 *     search: "action",
 *     sorting: "RATING_DESC",
 *     age_ratings: "R12_PLUS",
 *     publish_statuses: "IS_ONGOING",
 *     production_statuses: "IS_IN_PRODUCTION"
 *   }
 * })
 */
async function releases(arg) {
    releases_type_1.ReleaseSchema.parse(arg);
    const configApp = (0, read_config_1.configLoad)();
    const { status, data } = await axios_1.default.post(configApp.app.url + "anime/catalog/releases", {
        data: {
            ...arg
        }
    });
    return { status, data };
}
