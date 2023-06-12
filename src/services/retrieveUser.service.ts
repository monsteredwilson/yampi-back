import { TUser } from "../interfaces/user.interfaces";
import {Repository} from 'typeorm'
import { AppDataSource } from "../data-source";
import User from "../entities/user.entity";

export const retrieveUserService =async (): Promise<TUser> => {
	
	const queryString: string = `
		SELECT * FROM "user"
	`

	const userRepository: Repository<User> = AppDataSource.getRepository(User)

	const queryResult = await userRepository.query(queryString)

	return queryResult
}