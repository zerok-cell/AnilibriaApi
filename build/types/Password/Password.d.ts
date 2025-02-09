/**
 * @description A class for working with the functionality of changing and restoring a user's password.
 * @experimental The class has not been tested yet. It is unstable
 */
export declare class Password {
    /**
     * @description Changes your password.The user must be logged in
     * @param token Token
     * @param password Password user
     * @param passwordConfirmation Confirmation password
     */
    swapPasswordWithUseToken: (token: string, password: string, passwordConfirmation: string) => Promise<{
        status: number;
        data: any;
    }>;
    /**
     * @description Send mail on your email.
     * @param email Email
     */
    sendEmail: (email: string) => Promise<{
        status: number;
        data: any;
    }>;
}
