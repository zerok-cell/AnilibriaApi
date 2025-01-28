import { Collections } from "./User/Collections/Collections";
import { References } from "./User/Collections/References/References";
import { User } from "./User/User";


const main = async () => {
  const user = new User("zerok-cell", "Duplex007");

  try {
    const result = await user.authorize();
    const ref = new  Collections(user.token)
    const age = await ref.ids()
    console.log(age);

  } catch (error) {
    console.error("Ошибка авторизации:", error);
  }
};

main();