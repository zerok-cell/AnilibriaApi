import { TypeOfCollections } from "../zod_scheme/collections.types";
import { BaseInstrumental } from "../User/Base";

/*TODO releases api endpoint not correct*/


/**
 * @description Performs operations with your collection and releases in it
 * @param {string|undefined} [token] The token received during authorization
 * @see User
 */
export class Collections extends BaseInstrumental{


  constructor(token: string | undefined) {
      super(token,"https://anilibria.top/api/v1/accounts/users/me/collections/")
  }

  /**
   * @description Gets an ID of releases in your collection
   * @see requestUrl
   */
  public ids = async ()=>{
    return await this.requestUrl("GET",true,"ids")

  }
  /**
   *
   * @param id Release id
   * @param type In which collection add release `["PLANNED","WATCHED","WATCHING","POSTPONED","ABANDONED"]`
   * @see requestUrl
   */
  public collectionsAdd = async (id:number,type:TypeOfCollections)=>{
    return await this.requestUrl("POST",true,"",[{release_id:id,type_of_collection:type}] )

  }
  /**
   * @description Delete release from your collections.
   * @param id Release id
   */
  public collectionsRemove = async (id:number)=>{
    return await this.requestUrl("DELETE",true,"",[{release_id:id}] )



  }

}