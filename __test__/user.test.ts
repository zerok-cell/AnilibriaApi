import {
  describe, expect, test
} from "@jest/globals";
import axios from "axios";
import { anilibria } from "../src/lib/settings";
import { User } from "../src/User/User";

const user = new User("zerok-cell", "Duplex007");


test("User auth and logout", async () => {
  const auth = await user.authorize();
  expect(auth.status).toBe(200);
  console.log(auth.data);
  expect(typeof anilibria.defaults.headers.common.Authorization === "string").toBe(true);


  expect(await user.logout()).toStrictEqual({"data": {"token": null}, "status": 200});
  expect(user).toMatchSnapshot();

});

