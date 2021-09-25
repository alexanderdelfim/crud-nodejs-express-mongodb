# API RESTful com Node, Express e MongoDB:

Pequeno projeto com objetivo de aprender e exercitar o conhecimento com as tecnologias `Node.js`, `Express Framework` e `MongoDB`.

## Estrutura de arquivos e pastas
```shell
$ tree
.
├── README.md
├── docker-compose.yml
├── package-lock.json
├── package.json
└── src
    ├── app.js
    ├── config
    │   ├── db.config.js
    │   └── mongooseConnection.config.js
    ├── controllers
    │   └── product.controller.js
    ├── models
    │   └── product.model.js
    ├── routes
    │   ├── api.routes.js
    │   ├── index.js
    │   └── product.routes.js
    └── server.js
```
## Entidade de Produto
  CAMPO    |   TIPO   |
---------- | ---------|
Nome       | String   |
Descrição  | String   |
Preço      | Number   |

## Rotas da API a ser desenvolvida:

  ROTA                    |     HTTP(Verbo)   |      Descrição        | 
------------------------- | ----------------- | --------------------- | 
/api/product              |       GET         | Selecionar Todos      | 
/api/product              |       POST        | Criar Produto         | 
/api/product/:product_id  |       GET         | Selecionar Por Id     | 
/api/product/:product_id  |       PUT         | Atualizar Por Id      |    
/api/product/:product_id  |       DELETE      | Excluir Por Id        |