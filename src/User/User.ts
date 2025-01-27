import axios from "axios";
import { Password } from "../Password/Password";


export class User {
  public token: string | undefined;
  private readonly login: string;
  private readonly password: string;
  private readonly baseUrl: string;

  constructor(login: string, password: string) {
    this.login = login;
    this.password = password;
    this.baseUrl = "https://anilibria.top/api/v1/accounts/users/auth/";
  }

  public authorize = async () => {

    const fetchUrl = await axios.post(`${this.baseUrl}login/`, {
      login: this.login,
      password: this.password
    });
    this.token = fetchUrl.data.token;
    return fetchUrl.status;


  };
  public deauthorize = async () => {
    if (this.token) {
      try {
        const fetchUrl = await axios.post(`${this.baseUrl}logout/`, {}, {
          headers: {
            "Authorization": `Bearer ${this.token}`
          }
        });
        delete this.token;
        return fetchUrl.status;
      }catch (error) {
        return error
      }


    } else {
      return "Nothing token";
    }

  };
}


const main = async () => {
  const user = new User("zerok-cell", "Duplex007");
  try {
    const result = await user.authorize();
    const password = new Password(user.token)
    const x = await password.swapPasswordWithUseToken("Dupl32123", "Dupl32123");
    console.log(x);
  } catch (error) {
    console.error("Ошибка авторизации:", error);
  }
};

main();