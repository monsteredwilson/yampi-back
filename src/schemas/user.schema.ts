import {z} from 'zod'

export const userSchema = z.object({
	id: z.number(),
	email: z.string().email().max(100),
	password: z.string().max(100),
	createdAt: z.date().nullish()
})

export const userSchemaRequest = userSchema.omit({id:true, createdAt:true})