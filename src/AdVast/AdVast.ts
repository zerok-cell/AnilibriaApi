import axios from "axios";
import { configLoad } from "../lib/read_config";
import { DataAndStatus } from "../zod_scheme/user.schema";

export async function vast(): Promise<DataAndStatus> {
  const config = configLoad();
  const { status, data } = await axios.get(config.app.url + "ads/vasts");
  return { status, data };

}

export async function chain() {
  const config = configLoad();
  const { status, data } = await axios.get(config.app.url + "ads/vasts/chain");
  return { status, data };
}

const x = chain().then((d) => {
  console.log(d);
});
