import { Method } from "axios";
/**
 * @description Basic functionality for library classes. It is not intended for non-library use.
 * @description It should only be used for inheritance, because its methods are only available
 * in the class. Transfer the token via super
 * @param token You can get it using the User instance and its tokenGet getter.
 * @param url The address that this class will work with
 *
 * @see tokenGet
 *
 */
export declare class BaseInstrumental {
    private readonly token;
    private readonly barerToken;
    private readonly urlReferences;
    constructor(token: string | undefined, url: string);
    /**
     *
     * @param m Method request from axios, example GET,POST,DELETE and many others type request
     * @param br To send or not to send a bearer token. A bearer token is a token derived from the addition string of
     * the bearer and the token instance that you passed to the constructor.
     * @param url The endpoint of the request address.  The request address is derived from the addition of the address
     * that you passed to the constructor and that you passed here.
     * If the address that you passed to the constructor is for example `https://example.com/` and the url parameter is
     * equal to `bar`, then the final request address will be equal to
     * `https://example.com/bar`
     * @param d Data in the form of {key:value}
     * @returns {Promise<Record<any,any>>} Status code(http code) and the data that came from the server
     */
    requestUrl: <AxiosType>(m: Method, br: boolean, url: string, d?: Record<string, any>) => Promise<Record<any, any>>;
}
