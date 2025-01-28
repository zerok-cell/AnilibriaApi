import { z } from "zod";
export declare const UserSchema: z.ZodObject<{
    login: z.ZodReadonly<z.ZodString>;
    password: z.ZodReadonly<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    password: string;
    login: string;
}, {
    password: string;
    login: string;
}>;
export declare const authUser: z.ZodFunction<z.ZodTuple<[z.ZodObject<{
    login: z.ZodReadonly<z.ZodString>;
    password: z.ZodReadonly<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    password: string;
    login: string;
}, {
    password: string;
    login: string;
}>], z.ZodUnknown>, z.ZodUnknown>;
export type UserType = z.infer<typeof UserSchema>;
export type AuthUserType = z.infer<typeof authUser>;
