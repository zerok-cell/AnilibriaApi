import { z } from "zod";
export declare const UserSchema: z.ZodObject<{
    login: z.ZodReadonly<z.ZodString>;
    password: z.ZodReadonly<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    login: string;
    password: string;
}, {
    login: string;
    password: string;
}>;
export declare const authUser: z.ZodFunction<z.ZodTuple<[z.ZodObject<{
    login: z.ZodReadonly<z.ZodString>;
    password: z.ZodReadonly<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    login: string;
    password: string;
}, {
    login: string;
    password: string;
}>], z.ZodUnknown>, z.ZodUnknown>;
export interface DataAndStatus<T = string> {
    data: T | string | null;
    status: number;
}
export type UserType = z.infer<typeof UserSchema>;
export type AuthUserType = z.infer<typeof authUser>;
