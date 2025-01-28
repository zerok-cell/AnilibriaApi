import axios from "axios";
import dotenv from "dotenv";

// Загружаем переменные окружения из .env файла
dotenv.config();


export class User {
  private privateToken: string | undefined;
  private readonly login: string;
  private readonly password: string;
  private readonly urlUser: string;

  constructor(login: string, password: string) {
    this.login = login;
    this.password = password;
    this.urlUser = "https://anilibria.top/api/v1/accounts/users/auth/";
  }

  public get token(){
    return this.privateToken
  }
  public authorize = async () => {

    const fetchUrl = await axios.post<{ token: string }>(`${this.urlUser}login/`, {
      login: this.login,
      password: this.password
    });
    this.privateToken = fetchUrl.data.token;
    return { status: fetchUrl.status, token: this.privateToken };


  };
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
      return "Nothing token";
    }

  };
}


// const main = async () => {
//   const user = new User("zerok-cell", "Duplex007");
//
//   try {
//     const result = await user.authorize();
//     console.log(result);
//   } catch (error) {
//     console.error("Ошибка авторизации:", error);
//   }
// };
//
// main();