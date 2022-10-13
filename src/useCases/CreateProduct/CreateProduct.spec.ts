import { ICreateProductDTO } from './CreateProductDTO';
import { CreateProductController } from './CreateProductController';
import { describe, expect, test, it } from 'vitest'
import {Product} from '../../entities/Product'
import { CreateProductCase } from './CreateProductCase';

test('criar um produto', () =>{
    const produto = new Product({
        descricao: 'produto',
        codigoErp:'323' 
    })

    
    expect(produto.descricao).toEqual('produto')
    
})
/*
em desenvolvimento:

describe('criar uma instância do produto', () =>{
    it('deveria ser possivel criar um produto',()=>{
        const data = new ICreateProductDTO();
        
        const createProduct = new CreateProductCase(data)
        expect(createProduct.execute({
            descricao: 'produto',
            codigoErp:'323' 
        })).resolves.toBeInstanceOf(Product)
    })
       
})
*/
