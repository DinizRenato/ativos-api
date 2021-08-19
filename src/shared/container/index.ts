import { container } from "tsyringe";

import '@modules/users/providers';
import { IUsersRepository } from "@modules/users/domain/repositories/IUsersRepository";
import UsersRepository from "@modules/users/infra/typeorm/repositories/UsersRepository";


container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
