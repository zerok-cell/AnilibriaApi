import { BaseInstrumental } from "../../User/Base";
/**
 * @class References Class from endpoint References
 * @extends BaseInstrumental
 */
export declare class References extends BaseInstrumental {
    constructor(token: string | undefined);
    /**
     * @public
     * @description Returns a list of age ratings in the collections of the current user
     */
    ageRatings: () => Promise<Record<any, any>>;
    /**
     * @public
     * @description Returns a list of genres in the collections of the current user
     */
    genRes: () => Promise<Record<any, any>>;
    /**
     * @public
     * @description Returns a list of types in the collections of the current user
     */
    types: () => Promise<Record<any, any>>;
    /**
     * @public
     */
    years: () => Promise<Record<any, any>>;
}
