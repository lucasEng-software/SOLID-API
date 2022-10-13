import { IProductRepository } from '../../repositories/IProductRepository';


export class ListProductCase{
    constructor(
        private productRepository:IProductRepository
    ){}

    async execute(){
        return  await this.productRepository.listProducts()
    }


}