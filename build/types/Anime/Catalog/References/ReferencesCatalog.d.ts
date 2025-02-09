import { BaseInstrumental } from "../../../User/Base";
import { DataAndStatus } from "../../../zod_scheme/user.schema";
/**
 * @class ReferencesCatalog
 * @description A class for retrieving reference data (age ratings, genres, statuses, etc.).
 * @extends BaseInstrumental
 */
export declare class ReferencesCatalog extends BaseInstrumental {
    /**
     * @constructor
     * @description Creates an instance of the ReferencesCatalog class.
     */
    constructor();
    /**
     * @async
     * @function ageRatings
     * @description Retrieves a list of age ratings.
     * @returns {Promise<DataAndStatus>} An object containing the request status and data.
     */
    ageRatings: () => Promise<DataAndStatus>;
    /**
     * @async
     * @function genRes
     * @description Retrieves a list of genres.
     * @returns {Promise<DataAndStatus>} An object containing the request status and data.
     */
    genRes: () => Promise<DataAndStatus>;
    /**
     * @async
     * @function productionStatus
     * @description Retrieves a list of production statuses.
     * @returns {Promise<DataAndStatus>} An object containing the request status and data.
     */
    productionStatus: () => Promise<DataAndStatus>;
    /**
     * @async
     * @function publishStatuses
     * @description Retrieves a list of publish statuses.
     * @returns {Promise<DataAndStatus>} An object containing the request status and data.
     */
    publishStatuses: () => Promise<DataAndStatus>;
    /**
     * @async
     * @function seasons
     * @description Retrieves a list of seasons.
     * @returns {Promise<DataAndStatus>} An object containing the request status and data.
     */
    seasons: () => Promise<DataAndStatus>;
    /**
     * @async
     * @function sorting
     * @description Retrieves a list of sorting options.
     * @returns {Promise<DataAndStatus>} An object containing the request status and data.
     */
    sorting: () => Promise<DataAndStatus>;
    /**
     * @async
     * @function types
     * @description Retrieves a list of types.
     * @returns {Promise<DataAndStatus>} An object containing the request status and data.
     */
    types: () => Promise<DataAndStatus>;
    /**
     * @async
     * @function years
     * @description Retrieves a list of years.
     * @returns {Promise<DataAndStatus>} An object containing the request status and data.
     */
    years: () => Promise<DataAndStatus>;
    /**
     * @async
     * @protected
     * @function abstractionOnUrl
     * @description Performs a request to the specified URL.
     * @param {string} url - The URL to request.
     * @returns {Promise<DataAndStatus>} An object containing the request status and data.
     */
    protected abstractionOnUrl: (url: string) => Promise<DataAndStatus>;
}
