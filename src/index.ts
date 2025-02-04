import { Collections } from "./Collections/Collections";
import { References } from "./Collections/References/References";
import { Franchises } from "./Franchises/Franchises";
import { User } from "./User/User";


const main = async () => {
  const user = new User("zerok-cell", "Duplex007");

  try {
    // const result = await user.authorize();
    // const ref = new  References(user.tokenGet)
    // const age = await ref.genRes()
    // const deauth = user.logout()
    // console.log(user.tokenGet);
    const frc = new Franchises()
    console.log(await frc.franchisesRandom(2));

  } catch (error) {
    console.error("Ошибка авторизации:", error);
  }
};

main();