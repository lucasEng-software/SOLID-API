import { PostgresProductRepository } from './../../repositories/implementation/PostgresProductRepository';
import { CreateProductCase } from './../CreateProduct/CreateProductCase';
import { CreateProductController } from './../CreateProduct/CreateProductController';


const postgresProductRepository = new PostgresProductRepository()

const createProductCase = new CreateProductCase(
    postgresProductRepository
)


const createProductController = new CreateProductController(
    createProductCase
)

export {createProductCase, createProductController}


