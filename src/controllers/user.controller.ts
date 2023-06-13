import { Request, Response, json } from "express";
import { TUser, TUserRequest } from "../interfaces/user.interfaces";
import { createUserService } from "../services/createUser.service";
import { retrieveUserService } from "../services/retrieveUser.service";
import { deleteAllUserService } from "../services/deleteAllUser.service";

export const createUserController = async (request: Request, response: Response): Promise<Response> => {
	const userData: TUserRequest = request.body

	const newUser: TUser = await createUserService(userData)

	return response.status(201).json(newUser)
}

export const retrieveUserController = async (request: Request, response: Response): Promise<Response> => {

	const listUser: TUser[]|any = await retrieveUserService()

	return response.status(200).json(listUser)
}

export const deleteAllUserController =async (request: Request, response: Response): Promise<Response> => {
	
	const result = await deleteAllUserService()

	return response.status(204).json(result)
}