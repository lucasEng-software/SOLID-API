import { IProductRepository } from './../../repositories/IProductRepository';
import { Product } from "../../entities/Product";
import { ICreateProductDTO } from "./CreateProductDTO";


export class CreateProductCase{

    constructor(
        private productRepository:IProductRepository
    ){}

    async execute(data:ICreateProductDTO){
        const productAlreadyExists = await this.productRepository.findProduct(data.codigoErp)

        if(productAlreadyExists){
            throw new Error('Product already exists');
        }

        const product = new Product(data);

        return await this.productRepository.save(product);
    }


}