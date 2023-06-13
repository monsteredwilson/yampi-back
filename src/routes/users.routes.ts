import { Router } from "express";
import { createUserController, deleteAllUserController, retrieveUserController } from "../controllers/user.controller";
import { ensureEmailNotExistsMiddleware } from "../middleware/ensureEmailNotExists.middleware";

export const userRouter: Router = Router()

userRouter.post('', ensureEmailNotExistsMiddleware, createUserController)
userRouter.get('/list', retrieveUserController)
// userRouter.delete('', deleteAllUserController)