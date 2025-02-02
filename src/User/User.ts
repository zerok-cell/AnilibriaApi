import { anilibria } from "../lib/settings";
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
export class User {
  private readonly login: string;
  private readonly password: string;


  constructor(login: string, password: string) {
    this.login = login;
    this.password = password;
  }

  /**
   * @description issues you a private token
   * @example
   * const index = async () => {
   *   const user = User("my_login", "my_password")
   *   const token = user.tokenGet
   * }
   * @return {{ tokenBearer:string,token:string }}
   */
  public get tokenGet(): { tokenBearer: string, token: string } {
    const tokenBearer = anilibria.defaults.headers.common.Authorization as string;
    const token = anilibria.defaults.headers.common.Authorization as string;
    return { tokenBearer, token: token.slice(7) };
  }

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
   */
  public authorize = async (): Promise<DataAndStatus<{ token: string }>> => {

    const { status, data } = await anilibria.post<{ token: string }>(`/accounts/users/auth/login`, {
      login: this.login,
      password: this.password

    });
    anilibria.defaults.headers.common.Authorization = "Bearer " + data.token;
    return { data, status };


  };

  /**
   * @description Makes the user log out by `deleting` the token from the instance
   * @description It won't work if there is no token.
   * @returns {Promise<DataAndStatus<Record<string, any>>>} | Status code(http) or `{data:string, status:number}`
   * @throws {Error} The error may be related to the internal structure of the code, how you use this method,
   * or an error in the request.
   * @version 1.0.1
   */
  public logout = async (): Promise<DataAndStatus<Record<string, any>>> => {
    if (anilibria.defaults.headers.common.Authorization) {
      try {
        const { data, status } = await anilibria.post<{ token: null }>(`/accounts/users/auth/logout`);
        anilibria.defaults.headers.common.Authorization = undefined;
        return { data, status };
      } catch (error) {
        throw new Error(`There's been some kind of mistake. - ${error}`);
      }
    } else {
      return { data: "The token was not found in the instance, you may not be registered.", status: 401 };
    }

  };
}
