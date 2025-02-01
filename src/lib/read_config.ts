import fs from "fs";
import yaml from "js-yaml";
import path from "path";
import {z} from "zod"


export const ConfigSchema = z.object({
  app:z.object({
    url:z.string().nonempty(),
  })
})

type ConfigType = z.infer<typeof ConfigSchema>

const configPath = path.join(__dirname,"config.yaml")
/**
 * @description Use exclusively inside THE library IS `NOT INTENDED FOR OUTDOOR USE`
 * @return {ConfigType} Returns the config
 */
export const configLoad:()=>ConfigType =  ()=>{
  const file =  fs.readFileSync(configPath, "utf8")
  return  yaml.load(file) as ConfigType
}


