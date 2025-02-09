"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collections = void 0;
const Base_1 = require("../User/Base");
/*TODO releases api endpoint not correct*/
/**
 * @description Performs operations with your collection and releases in it
 * @param {string|undefined} [token] The token received during authorization
 * @see User
 */
class Collections extends Base_1.BaseInstrumental {
    constructor(token) {
        super(token, "https://anilibria.top/api/v1/accounts/users/me/collections/");
    }
    /**
     * @description Gets an ID of releases in your collection
     * @see requestUrl
     */
    ids = async () => {
        return await this.requestUrl("GET", true, "ids");
    };
    /**
     *
     * @param id Release id
     * @param type In which collection add release `["PLANNED","WATCHED","WATCHING","POSTPONED","ABANDONED"]`
     * @see requestUrl
     */
    collectionsAdd = async (id, type) => {
        return await this.requestUrl("POST", true, "", [{ release_id: id, type_of_collection: type }]);
    };
    /**
     * @description Delete release from your collections.
     * @param id Release id
     */
    collectionsRemove = async (id) => {
        return await this.requestUrl("DELETE", true, "", [{ release_id: id }]);
    };
}
exports.Collections = Collections;
