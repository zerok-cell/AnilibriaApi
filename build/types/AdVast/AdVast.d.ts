import { DataAndStatus } from "../zod_scheme/user.schema";
export declare function vast(): Promise<DataAndStatus>;
export declare function chain(): Promise<{
    status: number;
    data: any;
}>;
