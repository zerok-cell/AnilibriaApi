import {
  describe, expect, test
} from "@jest/globals";
import { User } from "../src/User/User";

const user = new User("zerok-cell", "Duplex007");


test("User auth and logout", async () => {
  const auth = await user.authorize();
  expect(auth.status).toBe(200);
  expect(typeof auth.token === "string").toBe(true);
  expect(user.tokenGet === auth.token).toBe(true);


  expect(await user.logout()).toBe(200);
  expect(user).toMatchSnapshot();

});

