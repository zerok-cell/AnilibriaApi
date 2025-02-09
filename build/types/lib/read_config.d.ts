import { z } from "zod";
export declare const ConfigSchema: z.ZodObject<{
    app: z.ZodObject<{
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
    }, {
        url: string;
    }>;
}, "strip", z.ZodTypeAny, {
    app: {
        url: string;
    };
}, {
    app: {
        url: string;
    };
}>;
type ConfigType = z.infer<typeof ConfigSchema>;
/**
 * @description Use exclusively inside THE library IS `NOT INTENDED FOR OUTDOOR USE`
 * @return {ConfigType} Returns the config
 */
export declare const configLoad: () => ConfigType;
export {};
