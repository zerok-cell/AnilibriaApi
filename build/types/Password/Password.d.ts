export declare class Password {
    protected urlPassword: string;
    constructor();
    /**
     * Changes your password.
     * The user must be logged in
     */
    swapPasswordWithUseToken: (token: string, password: string, passwordConfirmation: string) => Promise<number>;
    sendEmail: (email: string) => Promise<number>;
}
