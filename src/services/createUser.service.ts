import format from "pg-format";
import { TUser, TUserRequest } from "../interfaces/user.interfaces";
import {Repository} from 'typeorm'
import { AppDataSource } from "../data-source";
import User from "../entities/user.entity";

export const createUserService =async (userData: TUserRequest): Promise<TUser> => {
	
	const queryString: string = format(`
		INSERT INTO
			"user"(%I)
		VALUES
			(%L)
		RETURNING *
	`,
	Object.keys(userData),
	Object.values(userData)
	)

	const userRepository: Repository<User> = AppDataSource.getRepository(User)

	const queryResult = await userRepository.query(queryString)

	return queryResult[0]
}