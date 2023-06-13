import { TUser } from "../interfaces/user.interfaces";
import {Repository} from 'typeorm'
import { AppDataSource } from "../data-source";
import User from "../entities/user.entity";

export const deleteAllUserService =async (): Promise<void> => {
	
	const queryString: string = `
		DELETE FROM "user"
	`

	const userRepository: Repository<User> = AppDataSource.getRepository(User)

	const queryResult = await userRepository.query(queryString)

	return queryResult
}