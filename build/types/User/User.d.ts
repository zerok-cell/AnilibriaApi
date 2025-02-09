import { DataAndStatus } from "../zod_scheme/user.schema";
/**
 * @author Murad Shakhsinov
 * @description A class for interacting with endpoints related to the entrance user's account It is mandatory to accept
 * the password and email address of the `anilibria` user.
 * @param {string} [login] User name on anilibria
 * @param {string} [password] Anilibria login password
 * @example const user = User("my_login", "my_password")
 * @version 1.0.0
 * @since 1.0.0
 */
export declare class User {
    private token;
    private readonly login;
    private readonly password;
    constructor(login: string, password: string);
    /**
     * @description issues you a private token
     * @example
     * const index = async () => {
     *   const user = User("my_login", "my_password")
     *   const token = user.tokenGet
     * }
     * @return {{ tokenBearer:string,token:string }}
     */
    get tokenGet(): {
        tokenBearer: string;
        token: string;
    };
    /**
     * @description authorize the user using the login and password data that you passed to the instance of the class
     * @example
     * @example
     * const index = async () =>{
     *   const user = User("my_login", "my_password")
     *   const result = await user.authorize()
     * }
     *  @returns {Promise<DataAndStatus<Record<string, string>>} The operation status (http code)
     *  and the data received as a result of the request
     *  @version 1.0.1
     *
     *
     */
    authorize: () => Promise<DataAndStatus<{
        token: string;
    }>>;
    /**
     * @description Makes the user log out by `deleting` the token from the instance
     * @description It won't work if there is no token.
     * @returns {Promise<DataAndStatus<Record<string, any>>>} | Status code(http) or `{data:string, status:number}`
     * @throws {Error} The error may be related to the internal structure of the code, how you use this method,
     * or an error in the request.
     * @version 1.0.1
     */
    logout: () => Promise<DataAndStatus<Record<string, any>>>;
}
