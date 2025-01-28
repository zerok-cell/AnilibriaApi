import axios from "axios";

export class BaseInstrumental {
  private readonly token: string | undefined;
  private readonly barerToken: string | undefined;
  private readonly urlReferences: string | undefined;


  constructor(token: string | undefined, url: string) {
    this.token = token;
    this.barerToken = "Bearer " + token;
    this.urlReferences = url;
  }

  protected requestOnUrlGet = async <T>(ending: string) => {
    const { status, data } = await axios.get<T>(`${this.urlReferences}${ending}`, {
      headers: {
        "Authorization": this.barerToken
      }
    });
    return { status, data };
  };
  protected requestOnUrlPost = async <T>(ending: string, body: any) => {
    const { status, data } = await axios.post<T>(`${this.urlReferences}${ending}`, body, {
      headers: {
        "Authorization": this.barerToken
      }
    });
    return { status, data };

  };
  protected requestOnUrlDelete = async <T>(ending: string, body: any) => {
    const { status, data } = await axios.delete<T>(`${this.urlReferences}${ending}`,{
data:body,
      headers: {
        "Authorization": this.barerToken
      }
    });
    return { status, data };

  };

}