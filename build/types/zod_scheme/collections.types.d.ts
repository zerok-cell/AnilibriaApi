import { z } from "zod";
export declare const TypeOfCollectionsSchema: z.ZodEnum<["PLANNED", "WATCHED", "WATCHING", "POSTPONED", "ABANDONED"]>;
export type TypeOfCollections = z.infer<typeof TypeOfCollectionsSchema>;
