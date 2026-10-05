import cardapio from "./cardapio.js";
import adicionarPizza from "./adicionarPizza.js";

console.log("Quantidade de pizzas no cardapio: " + cardapio.length)

let adicionou = adicionarPizza(cardapio, {sabor:"Quatro Queijos", preco: 45})

if(adicionou === true) // adicionou === true | if(!adicionou)
{
    console.log("Pizza foi adicionada com sucesso")
}

console.log(cardapio)