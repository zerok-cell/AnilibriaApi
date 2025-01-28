import { TypeOfCollections } from "../../zod_scheme/collections.types";
import { BaseInstrumental } from "../Base";

/*TODO releases api endpoint not correct*/

export class Collections extends BaseInstrumental{


  constructor(token: string | undefined) {
      super(token,"https://anilibria.top/api/v1/accounts/users/me/collections/")
  }

  public ids = async ()=>{

    return await this.requestOnUrlGet<Array<[number,string]>>("ids")

  }
  public collectionsAdd = async (id:number,type:TypeOfCollections)=>{
    return await this.requestOnUrlPost("",[{release_id:id,type_of_collection:type}])

  }
  public collectionsRemove = async (id:number)=>{
    return await this.requestOnUrlDelete("",[{release_id:id}])

  }

}