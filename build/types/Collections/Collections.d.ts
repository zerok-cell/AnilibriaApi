import { TypeOfCollections } from "../zod_scheme/collections.types";
import { BaseInstrumental } from "../User/Base";
/**
 * @description Performs operations with your collection and releases in it
 * @param {string|undefined} [token] The token received during authorization
 * @see User
 */
export declare class Collections extends BaseInstrumental {
    constructor(token: string | undefined);
    /**
     * @description Gets an ID of releases in your collection
     * @see requestUrl
     */
    ids: () => Promise<Record<any, any>>;
    /**
     *
     * @param id Release id
     * @param type In which collection add release `["PLANNED","WATCHED","WATCHING","POSTPONED","ABANDONED"]`
     * @see requestUrl
     */
    collectionsAdd: (id: number, type: TypeOfCollections) => Promise<Record<any, any>>;
    /**
     * @description Delete release from your collections.
     * @param id Release id
     */
    collectionsRemove: (id: number) => Promise<Record<any, any>>;
}
