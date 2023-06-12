import { Router } from "express";
import { createUserController, retrieveUserController } from "../controllers/user.controller";

export const userRouter: Router = Router()

userRouter.post('', createUserController)
userRouter.get('/list', retrieveUserController)