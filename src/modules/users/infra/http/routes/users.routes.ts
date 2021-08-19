import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import UsersController from "../controllers/UsersController";

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get('/:email', 
celebrate({
    [Segments.PARAMS] : {
        email: Joi.string().email().required(),
    }
}), usersController.userByEmail)

usersRouter.post('/', 
celebrate({
    [Segments.BODY]:{
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }
}),
usersController.create);

export default usersRouter;