import axios from "axios";
import { config } from "dotenv";
import { configLoad } from "../../../lib/read_config";
import { ReleaseSchema, ReleaseType } from "../../../zod_scheme/releases.type";

/**
 *
 * @see ReleaseSchema
 * @example
 * const releasesRequest = releases({
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
