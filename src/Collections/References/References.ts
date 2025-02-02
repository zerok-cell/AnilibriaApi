import { BaseInstrumental } from "../../User/Base";


/**
 * @class References Class from endpoint References
 * @extends BaseInstrumental
 */
export class References extends BaseInstrumental {


  constructor(token: string | undefined) {
    super(token, "https://anilibria.top/api/v1/accounts/users/me/collections/references/");
  }

  /**
   * @public
   * @description Returns a list of age ratings in the collections of the current user
   */
  public ageRatings = async () => {
    return await this.requestUrl("GET", true, "age-ratings");

  };
  /**
   * @public
   * @description Returns a list of genres in the collections of the current user
   */
  public genRes = async () => {

    return await this.requestUrl("GET", true, "genres");
  };
  /**
   * @public
   * @description Returns a list of types in the collections of the current user
   */
  public types = async () => {
    return await this.requestUrl("GET", true, "types");
  };
  /**
   * @public
   */
  public years = async () => {
    return await this.requestUrl("GET", true, "years");

  };


}
