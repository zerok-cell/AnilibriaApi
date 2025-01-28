import axios from "axios";
import { BaseInstrumental } from "../../Base";

export class References extends BaseInstrumental{


  constructor(token: string | undefined) {
    super(token,"https://anilibria.top/api/v1/accounts/users/me/collections/references/" )
  }

  /**
   * Returns a list of age ratings in the collections of the current user
   */
  public ageRatings = async () => {

    return await this.requestOnUrlGet<Array<{
      value: string,
      label: string,
      description: string
    }>>("age-ratings");

  };
  /**
   * Returns a list of genres in the collections of the current user
   */
  public genRes = async () => {
    return await this.requestOnUrlGet<Array<{
      id: number,
      name: string,
    }>>("genres");
  };
  /**
   * Returns a list of types in the collections of the current user
   */
  public types = async () => {

    return await this.requestOnUrlGet<Array<{ value: string, description: string }>>("types");

  };

  public years = async () => {
    return await this.requestOnUrlGet<number[]>("years");
  };



}
