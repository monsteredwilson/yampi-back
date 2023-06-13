import { Request, Response, NextFunction } from "express";
import format from "pg-format";
import User from "../entities/user.entity";
import {Repository} from 'typeorm'
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

export const ensureEmailNotExistsMiddleware =async (request:Request, response: Response, next: NextFunction): Promise<Response|void> => {
	
	const email = request.body.email

	const queryString: string = format(`
		SELECT *
		FROM
			"user"
		WHERE
			email = (%L)
	`,email)

	const userRepository: Repository<User> = AppDataSource.getRepository(User)

	const queryResult = await userRepository.query(queryString)

	if (queryResult.length > 0 && queryResult[0].email !== null) {
		throw new AppError('Email already exists', 409);
	}

	return next()
}