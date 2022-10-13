import { expect, test } from 'vitest'
import {User} from '../../entities/User'

test('criar um produto', () =>{
    const usuario = new User({
        name: 'Fulano',
        email:'fulano@email.com',
        password:'senhafulano'

    })

    
    expect(usuario.name).toEqual('fulano')
    expect(usuario.email).toEqual('fulano@email.com')
    
})
/*Sucesso em produto ser esperado como 'produto', erro ao testar 
instancia do produto por conta do ID
*/