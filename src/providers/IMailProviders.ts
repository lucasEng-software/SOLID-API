interface IAdress{
    email:string;
    name:string;
    
}
export interface IMessage {
    to: IAdress;
    from:IAdress;
    subject:string;
    body:string;

}

export interface IMailProviders{
    sendMail(message:IMessage):Promise<void>;
}