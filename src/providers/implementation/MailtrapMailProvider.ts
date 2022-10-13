import { IMailProviders, IMessage } from "../IMailProviders";
import nodemailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer"
export class MailtrapMailProvider  implements IMailProviders{

    private transporter: Mail;

    constructor(){
        this.transporter = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth:{
                user:'c60011e9fbe18f',
                pass:'5319cc7bffe6d1'
            }    
        })
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to:{
                name:message.to.name,
                address: message.to.email,
            },
            from:{
                name: message.from.name,
                address: message.from.email,
            },
            subject:message.subject,
            html:message.body,
        })
    }


}