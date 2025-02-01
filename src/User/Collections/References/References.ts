import { BaseInstrumental } from "../../Base";

export class References extends BaseInstrumental{


  constructor(token: string | undefined) {
    super(token,"https://anilibria.top/api/v1/accounts/users/me/collections/references/" )
  }

  /**
   * @description Returns a list of age ratings in the collections of the current user
   */
  public ageRatings = async () => {
    return await this.requestUrl("GET",true,"age-ratings")

  };
  /**
   * @description Returns a list of genres in the collections of the current user
   */
  public genRes = async () => {

    return await this.requestUrl("GET",true,"genres")
  };
  /**
   * @description Returns a list of types in the collections of the current user
   */
  public types = async () => {

    return await this.requestUrl("GET",true,"types")


  };

  public years = async () => {
    return await this.requestUrl("GET",true,"years")

  };



}
