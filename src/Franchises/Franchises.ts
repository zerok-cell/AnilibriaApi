import { configLoad } from "../lib/read_config";
import { BaseInstrumental } from "../User/Base";

class franchises extends BaseInstrumental {

  constructor() {
    super("", configLoad().app.url);
  }


  public franchises = async () => {

  };
}