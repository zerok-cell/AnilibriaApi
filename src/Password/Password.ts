import axios from "axios";
import { User } from "../User/User";

export class Password {
  private readonly token: string | undefined;
  private readonly baseUrl: string | undefined;

  constructor(token: string | undefined) {
    this.token = token;
    this.baseUrl = "https://anilibria.top/api/v1/accounts/users/auth/password/";
  }


  public swapPasswordWithUseToken = async (password: string, passwordConfirmation: string) => {

    const request = await axios.post(`${this.baseUrl}reset/`, {
      password,
      password_confirmation: passwordConfirmation,
      token: this.token
    });

    return request.status
  };

  public sendEmail = async (email:string) => {
   const request =  await axios.post(`${this.baseUrl}forget/`, {
      email,
    })
    return request.status
  }
}