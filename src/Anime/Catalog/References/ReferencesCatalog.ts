import { configLoad } from "../../../lib/read_config";
import { BaseInstrumental } from "../../../User/Base";
import { DataAndStatus } from "../../../zod_scheme/user.schema";

/**
 * @class ReferencesCatalog
 * @description A class for retrieving reference data (age ratings, genres, statuses, etc.).
 * @extends BaseInstrumental
 */
export class ReferencesCatalog extends BaseInstrumental {

  /**
   * @constructor
   * @description Creates an instance of the ReferencesCatalog class.
   */
  constructor() {
    super("", configLoad().app.url);
  }

  /**
   * @async
   * @function ageRatings
   * @description Retrieves a list of age ratings.
   * @returns {Promise<DataAndStatus>} An object containing the request status and data.
   */
  public ageRatings = async (): Promise<DataAndStatus> => {
    return await this.abstractionOnUrl("anime/catalog/references/age-ratings");
  };

  /**
   * @async
   * @function genRes
   * @description Retrieves a list of genres.
   * @returns {Promise<DataAndStatus>} An object containing the request status and data.
   */
  public genRes = async (): Promise<DataAndStatus> => {
    return await this.abstractionOnUrl("anime/catalog/references/genres");
  };

  /**
   * @async
   * @function productionStatus
   * @description Retrieves a list of production statuses.
   * @returns {Promise<DataAndStatus>} An object containing the request status and data.
   */
  public productionStatus = async (): Promise<DataAndStatus> => {
    return await this.abstractionOnUrl("anime/catalog/references/production-statuses");
  };

  /**
   * @async
   * @function publishStatuses
   * @description Retrieves a list of publish statuses.
   * @returns {Promise<DataAndStatus>} An object containing the request status and data.
   */
  public publishStatuses = async (): Promise<DataAndStatus> => {
    return await this.abstractionOnUrl("anime/catalog/references/publish-statuses");
  };

  /**
   * @async
   * @function seasons
   * @description Retrieves a list of seasons.
   * @returns {Promise<DataAndStatus>} An object containing the request status and data.
   */
  public seasons = async (): Promise<DataAndStatus> => {
    return await this.abstractionOnUrl("anime/catalog/references/seasons");
  };

  /**
   * @async
   * @function sorting
   * @description Retrieves a list of sorting options.
   * @returns {Promise<DataAndStatus>} An object containing the request status and data.
   */
  public sorting = async (): Promise<DataAndStatus> => {
    return await this.abstractionOnUrl("anime/catalog/references/sorting");
  };

  /**
   * @async
   * @function types
   * @description Retrieves a list of types.
   * @returns {Promise<DataAndStatus>} An object containing the request status and data.
   */
  public types = async (): Promise<DataAndStatus> => {
    return await this.abstractionOnUrl("anime/catalog/references/types");
  };

  /**
   * @async
   * @function years
   * @description Retrieves a list of years.
   * @returns {Promise<DataAndStatus>} An object containing the request status and data.
   */
  public years = async (): Promise<DataAndStatus> => {
    return await this.abstractionOnUrl("anime/catalog/references/years");
  };

  /**
   * @async
   * @protected
   * @function abstractionOnUrl
   * @description Performs a request to the specified URL.
   * @param {string} url - The URL to request.
   * @returns {Promise<DataAndStatus>} An object containing the request status and data.
   */
  protected abstractionOnUrl = async (url: string): Promise<DataAndStatus> => {
    try{
      const { status, data } = await this.requestUrl("GET", false, url);
      return { status, data };
    }catch(error) {
      return {status:500,data:`The status of this error is unknown, but 500 has been set. ${error}`};
    }
  };
}

const ref = new ReferencesCatalog();
const res = ref.years().then(x => console.log(x));