import axios from "axios";
import { configLoad } from "../lib/read_config";


/**
 * A class for interacting with endpoints related to the entrance user's account
 * It is mandatory to accept the password and email address of the `anilibria` user.
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

  public get token() {
    return this.privateToken;
  }

  /**
   * User authorization by `username` and `password`. Creating a user session,
   * issuing an authorization token for use in cookies or in the Bearer Token
   */
  public authorize = async () => {

    const fetchUrl = await axios.post<{ token: string }>(`${this.urlUser}login/`, {
      login: this.login,
      password: this.password

    });
    this.privateToken = fetchUrl.data.token;
    return { status: fetchUrl.status, token: this.privateToken };


  };
  /**
   * Deauthorize the user
   */
  public deauthorize = async () => {
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
        return error;
      }


    } else {
      return { data: "Couldn\'t log in. The user is not logged in", status: 401 };
    }

  };
}
