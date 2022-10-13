import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { createProductController } from "./useCases/CreateProduct";
import { listProductController } from "./useCases/ListProduct";


const router = Router()

router.post('/users', (request, response) => {
    return createUserController.handle( request, response)
})

router.post('/products', (request, response) => {
    return createProductController.handle( request, response)
})

router.get('/products', (request, response) => {
    return listProductController.handle( request, response)
})
export { router }