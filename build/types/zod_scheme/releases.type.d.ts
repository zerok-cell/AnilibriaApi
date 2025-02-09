import { z } from "zod";
export declare const typesEnum: readonly ["TV", "ONA", "WEB", "OVA", "OAD", "MOVIE", "DORAMA", "SPECIAL"];
export declare const seasonsEnum: readonly ["winter", "spring", "summer", "autumn"];
export declare const sortingEnum: readonly ["FRESH_AT_DESC", "FRESH_AT_ASC", "RATING_DESC", "RATING_ASK", "YEAR_DESK", "YEAR_ASK"];
export declare const ageEnum: readonly ["R0_PLUS", "R6_PLUS", "R12_PLUS", "R16_PLUS", "R18_PLUS"];
export declare const publishStatusesEnum: readonly ["IS_ONGOING", "IS_NOT_ONGOING"];
export declare const productionStatusesEnum: readonly ["IS_IN_PRODUCTION", "IS_NOT_IN_PRODUCTION"];
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
export declare const ReleaseSchema: z.ZodObject<{
    page: z.ZodOptional<z.ZodString>;
    limit: z.ZodOptional<z.ZodNumber>;
    f: z.ZodOptional<z.ZodObject<{
        genres: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        types: z.ZodOptional<z.ZodEnum<["TV", "ONA", "WEB", "OVA", "OAD", "MOVIE", "DORAMA", "SPECIAL"]>>;
        seasons: z.ZodOptional<z.ZodEnum<["winter", "spring", "summer", "autumn"]>>;
        years: z.ZodOptional<z.ZodObject<{
            from_year: z.ZodOptional<z.ZodNumber>;
            to_year: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            from_year?: number | undefined;
            to_year?: number | undefined;
        }, {
            from_year?: number | undefined;
            to_year?: number | undefined;
        }>>;
        search: z.ZodOptional<z.ZodString>;
        sorting: z.ZodOptional<z.ZodEnum<["FRESH_AT_DESC", "FRESH_AT_ASC", "RATING_DESC", "RATING_ASK", "YEAR_DESK", "YEAR_ASK"]>>;
        age_ratings: z.ZodOptional<z.ZodEnum<["R0_PLUS", "R6_PLUS", "R12_PLUS", "R16_PLUS", "R18_PLUS"]>>;
        publish_statuses: z.ZodOptional<z.ZodEnum<["IS_ONGOING", "IS_NOT_ONGOING"]>>;
        production_statuses: z.ZodOptional<z.ZodEnum<["IS_IN_PRODUCTION", "IS_NOT_IN_PRODUCTION"]>>;
    }, "strip", z.ZodTypeAny, {
        genres?: number[] | undefined;
        types?: "TV" | "ONA" | "WEB" | "OVA" | "OAD" | "MOVIE" | "DORAMA" | "SPECIAL" | undefined;
        years?: {
            from_year?: number | undefined;
            to_year?: number | undefined;
        } | undefined;
        search?: string | undefined;
        seasons?: "winter" | "spring" | "summer" | "autumn" | undefined;
        sorting?: "FRESH_AT_DESC" | "FRESH_AT_ASC" | "RATING_DESC" | "RATING_ASK" | "YEAR_DESK" | "YEAR_ASK" | undefined;
        age_ratings?: "R0_PLUS" | "R6_PLUS" | "R12_PLUS" | "R16_PLUS" | "R18_PLUS" | undefined;
        publish_statuses?: "IS_ONGOING" | "IS_NOT_ONGOING" | undefined;
        production_statuses?: "IS_IN_PRODUCTION" | "IS_NOT_IN_PRODUCTION" | undefined;
    }, {
        genres?: number[] | undefined;
        types?: "TV" | "ONA" | "WEB" | "OVA" | "OAD" | "MOVIE" | "DORAMA" | "SPECIAL" | undefined;
        years?: {
            from_year?: number | undefined;
            to_year?: number | undefined;
        } | undefined;
        search?: string | undefined;
        seasons?: "winter" | "spring" | "summer" | "autumn" | undefined;
        sorting?: "FRESH_AT_DESC" | "FRESH_AT_ASC" | "RATING_DESC" | "RATING_ASK" | "YEAR_DESK" | "YEAR_ASK" | undefined;
        age_ratings?: "R0_PLUS" | "R6_PLUS" | "R12_PLUS" | "R16_PLUS" | "R18_PLUS" | undefined;
        publish_statuses?: "IS_ONGOING" | "IS_NOT_ONGOING" | undefined;
        production_statuses?: "IS_IN_PRODUCTION" | "IS_NOT_IN_PRODUCTION" | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    page?: string | undefined;
    limit?: number | undefined;
    f?: {
        genres?: number[] | undefined;
        types?: "TV" | "ONA" | "WEB" | "OVA" | "OAD" | "MOVIE" | "DORAMA" | "SPECIAL" | undefined;
        years?: {
            from_year?: number | undefined;
            to_year?: number | undefined;
        } | undefined;
        search?: string | undefined;
        seasons?: "winter" | "spring" | "summer" | "autumn" | undefined;
        sorting?: "FRESH_AT_DESC" | "FRESH_AT_ASC" | "RATING_DESC" | "RATING_ASK" | "YEAR_DESK" | "YEAR_ASK" | undefined;
        age_ratings?: "R0_PLUS" | "R6_PLUS" | "R12_PLUS" | "R16_PLUS" | "R18_PLUS" | undefined;
        publish_statuses?: "IS_ONGOING" | "IS_NOT_ONGOING" | undefined;
        production_statuses?: "IS_IN_PRODUCTION" | "IS_NOT_IN_PRODUCTION" | undefined;
    } | undefined;
}, {
    page?: string | undefined;
    limit?: number | undefined;
    f?: {
        genres?: number[] | undefined;
        types?: "TV" | "ONA" | "WEB" | "OVA" | "OAD" | "MOVIE" | "DORAMA" | "SPECIAL" | undefined;
        years?: {
            from_year?: number | undefined;
            to_year?: number | undefined;
        } | undefined;
        search?: string | undefined;
        seasons?: "winter" | "spring" | "summer" | "autumn" | undefined;
        sorting?: "FRESH_AT_DESC" | "FRESH_AT_ASC" | "RATING_DESC" | "RATING_ASK" | "YEAR_DESK" | "YEAR_ASK" | undefined;
        age_ratings?: "R0_PLUS" | "R6_PLUS" | "R12_PLUS" | "R16_PLUS" | "R18_PLUS" | undefined;
        publish_statuses?: "IS_ONGOING" | "IS_NOT_ONGOING" | undefined;
        production_statuses?: "IS_IN_PRODUCTION" | "IS_NOT_IN_PRODUCTION" | undefined;
    } | undefined;
}>;
export type ReleaseType = z.infer<typeof ReleaseSchema>;
