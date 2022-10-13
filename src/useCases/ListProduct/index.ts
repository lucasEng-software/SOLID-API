import { PostgresProductRepository } from './../../repositories/implementation/PostgresProductRepository';
import { ListProductCase } from './ListProductCase';
import { ListProductController } from './ListProductController';

const postgresProductRepository = new PostgresProductRepository()

const listProductCase = new ListProductCase(
    postgresProductRepository
)


const listProductController = new ListProductController(
    listProductCase
)

export {listProductController, listProductCase}


