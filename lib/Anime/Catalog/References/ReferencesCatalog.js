"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferencesCatalog = void 0;
const read_config_1 = require("../../../lib/read_config");
const Base_1 = require("../../../User/Base");
/**
 * @class ReferencesCatalog
 * @description A class for retrieving reference data (age ratings, genres, statuses, etc.).
 * @extends BaseInstrumental
 */
class ReferencesCatalog extends Base_1.BaseInstrumental {
    /**
     * @constructor
     * @description Creates an instance of the ReferencesCatalog class.
     */
    constructor() {
        super("", (0, read_config_1.configLoad)().app.url);
    }
    /**
     * @async
     * @function ageRatings
     * @description Retrieves a list of age ratings.
     * @returns {Promise<DataAndStatus>} An object containing the request status and data.
     */
    ageRatings = async () => {
        return await this.abstractionOnUrl("anime/catalog/references/age-ratings");
    };
    /**
     * @async
     * @function genRes
     * @description Retrieves a list of genres.
     * @returns {Promise<DataAndStatus>} An object containing the request status and data.
     */
    genRes = async () => {
        return await this.abstractionOnUrl("anime/catalog/references/genres");
    };
    /**
     * @async
     * @function productionStatus
     * @description Retrieves a list of production statuses.
     * @returns {Promise<DataAndStatus>} An object containing the request status and data.
     */
    productionStatus = async () => {
        return await this.abstractionOnUrl("anime/catalog/references/production-statuses");
    };
    /**
     * @async
     * @function publishStatuses
     * @description Retrieves a list of publish statuses.
     * @returns {Promise<DataAndStatus>} An object containing the request status and data.
     */
    publishStatuses = async () => {
        return await this.abstractionOnUrl("anime/catalog/references/publish-statuses");
    };
    /**
     * @async
     * @function seasons
     * @description Retrieves a list of seasons.
     * @returns {Promise<DataAndStatus>} An object containing the request status and data.
     */
    seasons = async () => {
        return await this.abstractionOnUrl("anime/catalog/references/seasons");
    };
    /**
     * @async
     * @function sorting
     * @description Retrieves a list of sorting options.
     * @returns {Promise<DataAndStatus>} An object containing the request status and data.
     */
    sorting = async () => {
        return await this.abstractionOnUrl("anime/catalog/references/sorting");
    };
    /**
     * @async
     * @function types
     * @description Retrieves a list of types.
     * @returns {Promise<DataAndStatus>} An object containing the request status and data.
     */
    types = async () => {
        return await this.abstractionOnUrl("anime/catalog/references/types");
    };
    /**
     * @async
     * @function years
     * @description Retrieves a list of years.
     * @returns {Promise<DataAndStatus>} An object containing the request status and data.
     */
    years = async () => {
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
    abstractionOnUrl = async (url) => {
        try {
            const { status, data } = await this.requestUrl("GET", false, url);
            return { status, data };
        }
        catch (error) {
            return { status: 500, data: `The status of this error is unknown, but 500 has been set. ${error}` };
        }
    };
}
exports.ReferencesCatalog = ReferencesCatalog;
const ref = new ReferencesCatalog();
const res = ref.years().then(x => console.log(x));
