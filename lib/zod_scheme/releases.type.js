"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleaseSchema = exports.productionStatusesEnum = exports.publishStatusesEnum = exports.ageEnum = exports.sortingEnum = exports.seasonsEnum = exports.typesEnum = void 0;
const zod_1 = require("zod");
exports.typesEnum = ["TV", "ONA", "WEB", "OVA", "OAD", "MOVIE", "DORAMA", "SPECIAL"];
exports.seasonsEnum = ["winter", "spring", "summer", "autumn"];
exports.sortingEnum = ["FRESH_AT_DESC", "FRESH_AT_ASC", "RATING_DESC",
    "RATING_ASK", "YEAR_DESK", "YEAR_ASK"];
exports.ageEnum = ["R0_PLUS", "R6_PLUS", "R12_PLUS", "R16_PLUS", "R18_PLUS"];
exports.publishStatusesEnum = ["IS_ONGOING", "IS_NOT_ONGOING"];
exports.productionStatusesEnum = ["IS_IN_PRODUCTION", "IS_NOT_IN_PRODUCTION"];
/**
 * @property {string} [page] - Номер страницы.
 * @property {number} [limit] - Количество релизов на странице.
 * @property {Object} [f] - Объект с фильтрами.
 * @property {number[]} [f.genres] - Массив идентификаторов жанров.
 * @property {string} [f.types] - Тип релиза. См. `typesEnum`.
 * @property {string} [f.seasons] - Сезон выпуска. См. `seasonsEnum`.
 * @property {Object} [f.years] - Объект с годом выпуска.
 * @property {number} [f.years.from_year] - Минимальный год выпуска.
 * @property {number} [f.years.to_year] - Максимальный год выпуска.
 * @property {string} [f.search] - Ключевое слово для поиска.
 * @property {string} [f.sorting] - Сортировка. См. `sortingEnum`.
 * @property {string} [f.age_ratings] - Возрастной рейтинг. См. `ageEnum`.
 * @property {string} [f.publish_statuses] - Статус публикации. См. `publishStatusesEnum`.
 * @property {string} [f.production_statuses] - Статус производства. См. `productionStatusesEnum`.
 * @example
 * const exampleRelease: ReleaseType = {
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
 * };
 */
exports.ReleaseSchema = zod_1.z.object({
    page: zod_1.z.string().nonempty().optional(),
    limit: zod_1.z.number().optional(),
    f: zod_1.z.object({
        genres: zod_1.z.array(zod_1.z.number()).optional(),
        types: zod_1.z.enum(exports.typesEnum).optional(),
        seasons: zod_1.z.enum(exports.seasonsEnum).optional(),
        years: zod_1.z.object({
            from_year: zod_1.z.number().optional(),
            to_year: zod_1.z.number().optional()
        }).optional(),
        search: zod_1.z.string().optional(),
        sorting: zod_1.z.enum(exports.sortingEnum).optional(),
        age_ratings: zod_1.z.enum(exports.ageEnum).optional(),
        publish_statuses: zod_1.z.enum(exports.publishStatusesEnum).optional(),
        production_statuses: zod_1.z.enum(exports.productionStatusesEnum).optional()
    }).optional()
});
