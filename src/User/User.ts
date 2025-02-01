import axios from "axios";
import { configLoad } from "../lib/read_config";
import { AuthType } from "../zod_scheme/auth.type";
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
  private privateToken: string | undefined;
  private readonly login: string;
  private readonly password: string;
  private readonly urlUser: string = `${configLoad().app.url}accounts/users/auth/`;


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
   * @return {string}
   */
  public get tokenGet(): string | undefined {
    return this.privateToken;
  }

  /**
   * @description authorize the user using the login and password data that you passed to the instance of the class
   * @example
   * @example
   * const index = async () =>{
   *   const user = User("my_login", "my_password")
   *   const result = await user.authorize()
   * }
   * @returns {Promise<AuthType>} The operation status (http code) and the private token received as a result of the
   * request
   */
  public authorize = async (): Promise<AuthType> => {

    const fetchUrl = await axios.post<{ token: string }>(`${this.urlUser}login/`, {
      login: this.login,
      password: this.password

    });
    this.privateToken = fetchUrl.data.token;
    return { status: fetchUrl.status, token: this.privateToken };


  };

  /**
   * @description Makes the user log out by `deleting` the token from the instance
   * @description It won't work if there is no token.
   * @returns {Promise<number | {data:string, status:number}>} | Status code(http) or `{data:string, status:number}`
   * @throws {Error} The error may be related to the internal structure of the code, how you use this method,
   * or an error in the request.
   */
  public logout = async (): Promise<number | DataAndStatus> => {
    if (this.privateToken) {
      try {
        const fetchUrl = await axios.post(`${this.urlUser}logout/`, {}, {
          headers: {
            "Authorization": `Bearer ${this.privateToken}`
          }
        });
        this.privateToken = undefined;
        return fetchUrl.status;
      } catch (error) {
        throw new Error(`There's been some kind of mistake. - ${error}`);
      }
    } else {
      return { data: "The token was not found in the instance, you may not be registered.", status: 401 };
    }

  };
}
