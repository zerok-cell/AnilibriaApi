import { z } from "zod";

export const typesEnum = ["TV", "ONA", "WEB", "OVA", "OAD", "MOVIE", "DORAMA", "SPECIAL"] as const;
export const seasonsEnum = ["winter", "spring", "summer", "autumn"] as const;
export const sortingEnum = ["FRESH_AT_DESC", "FRESH_AT_ASC", "RATING_DESC",
  "RATING_ASK", "YEAR_DESK", "YEAR_ASK"] as const;
export const ageEnum = ["R0_PLUS", "R6_PLUS", "R12_PLUS", "R16_PLUS", "R18_PLUS"] as const;
export const publishStatusesEnum = ["IS_ONGOING", "IS_NOT_ONGOING"] as const;
export const productionStatusesEnum = ["IS_IN_PRODUCTION", "IS_NOT_IN_PRODUCTION"] as const;
/**
 * @param {string}[page] Page
 * @param {number}[limit] Limit the returns releases
 * @param {array<number>}[f.genres] Unknown me
 * @param {string}[f.types]  The type of releases being returned, such as movies, dramas, and others.
 * See in the `typesEnum`
 * @param {string}[f.seasons]  Release Release Season. See in the `seasonsEnum`
 * @param {number}[f.years.from_year]  Minimum release year
 * @param {number}[f.years.to_year]  Maximum release year
 * @param {string}[f.search]  Key word from search
 * @param {string}[f.sorting]  Filters, they can be viewed in `sortingEnum`
 * @param {string}[f.age_ratings]  filters by age, all kinds of filters are available in `ageEnum`
 * @param {string}[f.publish_statuses] Whether a release is coming out or not (online or not), is in
 * `publishStatusesEnum`
 * @param {string}[f.production_statuses] Unknown me. See in `productionStatusesEnum`
 *@example
 * {
 *   page: '1',
 *   limit: 10,
 *   f: {
 *     genres: [1, 2, 3],
 *     types: 'type1',
 *     seasons: 'summer',
 *     years: {
 *       from_year: '2020',
 *       to_year: 2025
 *     },
 *     search: 'example',
 *     sorting: 'asc',
 *     age_ratings: 'PG',
 *     publish_statuses: 'published',
 *     production_statuses: 'in_production'
 *   }
 * };
 *
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