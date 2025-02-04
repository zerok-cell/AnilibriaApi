import { anilibria } from "../lib/settings";

// TODO протестировать класс

/**
 * @description A class for working with the functionality of changing and restoring a user's password.
 * @experimental The class has not been tested yet. It is unstable
 */
export class Password {
  /**
   * @description Changes your password.The user must be logged in
   * @param token Token
   * @param password Password user
   * @param passwordConfirmation Confirmation password
   */
  public swapPasswordWithUseToken = async (token: string, password: string, passwordConfirmation: string) => {

    const { status, data } = await anilibria.post(`/accounts/users/auth/password/reset/`, {
      password,
      password_confirmation: passwordConfirmation,
      token
    });

    return { status, data };
  };
  /**
   * @description Send mail on your email.
   * @param email Email
   */
  public sendEmail = async (email: string) => {
    const { status, data } = await anilibria.post(`/accounts/users/auth/password/forget/`, {
      email
    });
    return { status, data };
  };
}