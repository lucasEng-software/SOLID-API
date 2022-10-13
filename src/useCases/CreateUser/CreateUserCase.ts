import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository"
import { ICreateUserRequestDTO } from "./ICreateUserDTO"
import { IMailProviders } from "../../providers/IMailProviders";

export class CreateUserCase{

    constructor(
        private usersRepository:IUsersRepository,
        private mailProvider:IMailProviders
            
    ){}

    async execute(data: ICreateUserRequestDTO){
        const userAlreadyExists = await this.usersRepository.findbyEmail(data.email)

        if(userAlreadyExists){
                        throw new Error('User already exists.');
        }

        const user = new User(data);
        
        await this.usersRepository.save(user);

        await this.mailProvider.sendMail({
            to:{
                name:data.name,
                email:data.email,
            },
            from:{
                name: 'VIP Commerce Suporte',
                email:'suportevip@vip.com',
            },
            subject: 'Podemos lhe ajudar com',
            body:'<p> Você pode fazer login com seu e-mail e senha </p>',
        })
    }
}