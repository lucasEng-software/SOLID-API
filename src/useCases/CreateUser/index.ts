import { MailtrapMailProvider } from "../../providers/implementation/MailtrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementation/PostgresUsersRepository";
import { CreateUserCase } from "./CreateUserCase";
import { CreateUserController } from "./CreateUserController";

const mailtrapMailProvider = new MailtrapMailProvider()
const postgresUsersRepository = new PostgresUsersRepository()
const postgresProductRepository = new PostgresUsersRepository()

const createUserCase = new CreateUserCase(
    postgresUsersRepository,
    mailtrapMailProvider
)



const createUserController = new CreateUserController(
    createUserCase
)


export { createUserCase, createUserController}


