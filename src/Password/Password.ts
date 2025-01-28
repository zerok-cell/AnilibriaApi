import axios from "axios";

export class Password {
   protected urlPassword: string;

  constructor() {
    this.urlPassword = "https://anilibria.top/api/v1/accounts/users/auth/password/";
  }

  /**
   * Changes your password.
   * The user must be logged in
   */
  public swapPasswordWithUseToken = async (token: string, password: string, passwordConfirmation: string) => {

    const request = await axios.post(`${this.urlPassword}reset/`, {
      password,
      password_confirmation: passwordConfirmation,
      token
    });

    return request.status;
  };

  public sendEmail = async (email: string) => {
    const request = await axios.post(`${this.urlPassword}forget/`, {
      email
    });
    return request.status;
  };
}