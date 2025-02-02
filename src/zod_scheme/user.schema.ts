import {z} from "zod"

export const UserSchema = z.object({
  login: z.string().nonempty().readonly(),
  password: z.string().nonempty().readonly(),
})

export const authUser = z.function().args(UserSchema)


export interface DataAndStatus<T=string>{
  data:T|string|null,
  status:number
}
export type UserType = z.infer<typeof UserSchema>
export type AuthUserType = z.infer<typeof authUser>