"# cardapio-mysql" 
criar uma tabela de pedidos para o cardapio

criar rota que busca pelo nome // feito

criar rota patch

automatizar mais os serviços

fazer um tabela de ingredientes, para o cliente escolher os ingredientes de um lanche, e listar o pedido com cada ingrediente tendo um preço


pedido: {
    "bebidas":[],
    "lanches":[],
    "lanchesCustomizados":[
        {
            "ingredientes":[
                {
                    "nome": "pao",
                    "quantidade":1,
                    "valor": 1
                }
            ],
            "total":15
        }
    ],
}