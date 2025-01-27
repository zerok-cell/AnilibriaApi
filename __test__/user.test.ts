import {describe, expect, test} from "@jest/globals";
import { User } from "../src/User/User";

const user = new User("zerok-cell", "Duplex007");



test("User auth and deauth",async () => {
  expect(await user.authorize()).toBe(200)
  expect(await user.deauthorize()).toBe(200)

})