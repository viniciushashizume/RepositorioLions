function listarCardapio(cardapio)
{
    if(cardapio.length === 0){
        console.log("O cardapio está vazio!")
        return
    }
    cardapio.forEach((pizza) =>
        console.log(`${pizza.sabor} - R$${pizza.preco}`))
}

export default listarCardapio