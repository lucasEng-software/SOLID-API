import { Product } from "../../entities/Product";
import { IProductRepository } from "../IProductRepository";
import path = require ("path")
import fs = require ("fs")
import data = require ("./products.json")

function writeFileSync(){
    fs.writeFileSync(
    path.join(__dirname, "products.json"),
    JSON.stringify(data, null, 2))

}

export class PostgresProductRepository implements IProductRepository{



    async writeFileSync(cb): Promise <Response>{
        /*fs.writeFileSync(
            path.join(__dirname, "./products.json"),
            JSON.stringify(data, null, 2)), err =>{
                if(err)throw err
            }   

        const productReturn = data.products[data.products.length-1]
        // cb(JSON.stringify({"message":"Produto criado com sucesso", productReturn}))
        */
        cb(JSON.stringify({"message":"Produto criado com sucesso"}))
        return cb
    }


    async findProduct(codigoErp:string): Promise<Product>{
        const product = data.products.find((product) => product.codigoErp === codigoErp);
        if(product)console.log(product)

        return product;
    }
    
    async listProducts(): Promise<string>{
        return JSON.stringify(data.products)
    }

    async save (product:Product): Promise<string>{

        const descricao = product.descricao;
        const codigoErp = product.codigoErp;
        const id = product.id;
        data.products.push({descricao,codigoErp,id})
        
        writeFileSync()
        
        const productReturn = data.products[data.products.length-1]
        return JSON.stringify(productReturn);
        
        
        //const returnProduct  = await this.writeFileSync((message) => response.end (message))

        }
    }