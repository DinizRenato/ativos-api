import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '../../../services/CreateUserService';
import { classToClass } from 'class-transformer';
import GetUserByEmailService from '../../../services/GetUserByEmailService';
import UpdateUserService from '../../../services/UpdateUserService';

export default class UsersController {
    
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUserService = container.resolve(CreateUserService);
    
    const user = await createUserService.execute({
      name,
      email,
      password,
    });

    return response.json(classToClass(user));
  }

  public async update(request: Request, response: Response): Promise<Response>{
    const {user_id} = request.params;
    const { name, email, password, old_password } = request.body;
    const updateProfileService = container.resolve(UpdateUserService);
    const user = await updateProfileService.execute({
      user_id,
      name,
      email,
      password,
      old_password,
    });
    return response.json(classToClass(user));
  }

  public async userByEmail(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { email } = request.params;

    const showUserByIdService = container.resolve(GetUserByEmailService);

    const user = await showUserByIdService.execute({ email });

    return response.json(user);
  }


}
