import {Request, response, Response} from "express";
import { CreateProductCase } from './CreateProductCase';


export class CreateProductController{
    
    constructor(
        private createProductCase: CreateProductCase,
    
    ){}


   async handle(request:Request, response:Response): Promise <Response> {
       const{descricao, codigoErp} = request.body;
       
       try{
            const productReturn = await this.createProductCase.execute({
                descricao,
                codigoErp
            })
            const product = JSON.parse(productReturn)
            return response.status(201).json({"Status" : "product created", product})
            
       }catch(err){
            return response.status(400).json({
                message:err.message || 'unexpected error'
            })  
        }
   }
}