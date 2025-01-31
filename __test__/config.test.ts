import { describe, expect, test } from "@jest/globals";
import { configLoad, ConfigSchema } from "../src/lib/read_config";


test("Config type equal",()=>{
  const conf = configLoad()
  expect(ConfigSchema.parse(conf)).toStrictEqual(conf)

})