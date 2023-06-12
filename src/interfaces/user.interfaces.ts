import { userSchema, userSchemaRequest } from "../schemas/user.schema";
import {z} from 'zod'

export type TUser = z.infer<typeof userSchema>

export type TUserRequest = z.infer<typeof userSchemaRequest>