# SOLID-API


Comando para execução: npm run express

é possível testar 3 rotas
2 para Product, 1 POST e 1 GET 

e 1 POST para User


é possível testar através do arquivo requestProducts.http com a extensão RestClient do Visual Studio ou via alguma ferramenta de requisições API( Insomnia, Postman )



![image](https://user-images.githubusercontent.com/59840153/195694001-494b45fc-5e98-421c-9445-690f5d657e69.png)

o resultado para products é o cadastro de produtos em um JSON ou listagem dos produtos do JSON products.json


# SOLID

o projeto foi feito com divisões seguind alguns dos padrões SOLID

foi criado casos de testes simples com VITEST 
exec: npm test

O projeto seria feito com postgress, mas para estudo da logica foi feito manipulação com JSON e como foi seguido o SOLID, é possível substituir a implementação de armazenamento por algum banco sem perder os casos de uso e suas regras serem alteradas respeitando as interfaces dto
