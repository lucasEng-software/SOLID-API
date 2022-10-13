import { Product } from './../entities/Product';


export interface IProductRepository{

    listProducts():Promise<string>;
    findProduct(codigoErp:string):Promise <Product>;
    save(product:Product):Promise<string>;

}