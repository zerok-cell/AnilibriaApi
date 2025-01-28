export declare class User {
    private privateToken;
    private readonly login;
    private readonly password;
    private readonly urlUser;
    constructor(login: string, password: string);
    get token(): string | undefined;
    authorize: () => Promise<{
        status: number;
        token: string;
    }>;
    deauthorize: () => Promise<unknown>;
}
