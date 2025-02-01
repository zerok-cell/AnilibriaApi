import axios, { Method } from "axios";


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
export class BaseInstrumental {
  private readonly token: string | undefined;
  private readonly barerToken: string | undefined;
  private readonly urlReferences: string | undefined;


  constructor(token: string | undefined, url: string) {
    this.token = token;
    this.barerToken = "Bearer " + token;
    this.urlReferences = url;
  }

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
  protected requestUrl = async <AxiosType>(m: Method,
                                           br: boolean,
                                           url: string,
                                           d?: Record<string, any>): Promise<Record<any, any>> => {
    const { status, data } = await axios.request<AxiosType>({
      url: this.urlReferences + url,
      method: m, data: d, headers: {
        "Authorization": br && this.barerToken,
        "Content-Type": "application/json"


      }
    });
    return { status, data };
  };


}