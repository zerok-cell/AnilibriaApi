import axios from "axios";
import { configLoad } from "../../../lib/read_config";
import { ReleaseSchema, ReleaseType } from "../../../zod_scheme/releases.type";

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
export async function releases(arg:ReleaseType) {
  ReleaseSchema.parse(arg)
  const configApp = configLoad();
  const { status, data } = await axios.post(configApp.app.url + "anime/catalog/releases",{
    data:{
      ...arg
    }
  });
  return { status, data };
}
