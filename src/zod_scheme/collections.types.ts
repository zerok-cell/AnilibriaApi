import {z} from "zod"

export const TypeOfCollectionsSchema = z.enum(["PLANNED","WATCHED","WATCHING","POSTPONED","ABANDONED"])

export type TypeOfCollections = z.infer<typeof TypeOfCollectionsSchema>

