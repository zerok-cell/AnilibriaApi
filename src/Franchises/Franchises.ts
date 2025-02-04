import { configLoad } from "../lib/read_config";
import { anilibria } from "../lib/settings";
import { BaseInstrumental } from "../User/Base";

export class Franchises {


  public franchises = async () => {
    const { status, data } = await anilibria.get("/anime/franchises");
    return { status, data };
  };
  public franchisesId = async (id: string) => {
    const { status, data } = await anilibria.get(`/anime/franchises/${id}`);
    return { status, data };
  };
  public franchisesRandom = async (limit:number) => {
    const { status, data } = await anilibria.get(`/anime/franchises/random?limit=${limit}`);
    return { status, data };
  }
  public franchisesFromRelease = async (releaseId: string) => {
    const { status, data } = await anilibria.get(`/anime/franchises/release/${releaseId}`);
    return { status, data };
  }
}

