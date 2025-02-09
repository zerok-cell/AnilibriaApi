"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.References = void 0;
const Base_1 = require("../../User/Base");
/**
 * @class References Class from endpoint References
 * @extends BaseInstrumental
 */
class References extends Base_1.BaseInstrumental {
    constructor(token) {
        super(token, "https://anilibria.top/api/v1/accounts/users/me/collections/references/");
    }
    /**
     * @public
     * @description Returns a list of age ratings in the collections of the current user
     */
    ageRatings = async () => {
        return await this.requestUrl("GET", true, "age-ratings");
    };
    /**
     * @public
     * @description Returns a list of genres in the collections of the current user
     */
    genRes = async () => {
        return await this.requestUrl("GET", true, "genres");
    };
    /**
     * @public
     * @description Returns a list of types in the collections of the current user
     */
    types = async () => {
        return await this.requestUrl("GET", true, "types");
    };
    /**
     * @public
     */
    years = async () => {
        return await this.requestUrl("GET", true, "years");
    };
}
exports.References = References;
