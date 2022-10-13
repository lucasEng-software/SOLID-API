import { json, Request, response, Response } from "express";
import { Product } from "../../entities/Product";
import { ListProductCase } from "./ListProductCase";

export class ListProductController{


    constructor(

        private listProductCase: ListProductCase,

    ){}

    async handle(request:Request, response: Response): Promise <Response>{

        
        try{
            
            const list = await this.listProductCase.execute()
            const products = JSON.parse(list)
            return response.status(200).json({
                products
            })
        }catch (err){
            return response.status(400).json({
                message:err.message || 'unexpected error'
            })
        }

    }

}