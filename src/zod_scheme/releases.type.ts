import { z } from "zod";

export const typesEnum = ["TV", "ONA", "WEB", "OVA", "OAD", "MOVIE", "DORAMA", "SPECIAL"] as const;
export const seasonsEnum = ["winter", "spring", "summer", "autumn"] as const;
export const sortingEnum = ["FRESH_AT_DESC", "FRESH_AT_ASC", "RATING_DESC",
  "RATING_ASK", "YEAR_DESK", "YEAR_ASK"] as const;
export const ageEnum = ["R0_PLUS", "R6_PLUS", "R12_PLUS", "R16_PLUS", "R18_PLUS"] as const;
export const publishStatusesEnum = ["IS_ONGOING", "IS_NOT_ONGOING"] as const;
export const productionStatusesEnum = ["IS_IN_PRODUCTION", "IS_NOT_IN_PRODUCTION"] as const;
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
export const ReleaseSchema = z.object({
  page: z.string().nonempty().optional(),
  limit: z.number().optional(),
  f: z.object({
    genres: z.array(z.number()).optional(),
    types: z.enum(typesEnum).optional(),
    seasons: z.enum(seasonsEnum).optional(),
    years: z.object({
      from_year: z.number().optional(),
      to_year: z.number().optional()
    }).optional(),
    search: z.string().optional(),
    sorting: z.enum(sortingEnum).optional(),
    age_ratings: z.enum(ageEnum).optional(),
    publish_statuses: z.enum(publishStatusesEnum).optional(),
    production_statuses: z.enum(productionStatusesEnum).optional()
  }).optional()
});

export type ReleaseType = z.infer<typeof ReleaseSchema>