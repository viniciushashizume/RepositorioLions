import mongoose from "../conexao.js"
import Produto from "./Produto.js"

//"converte" a lista do banco de dados em um array no js
let produtos = await Produto.find({categoria: "Periferico"})
console.log("Total de produtos: " + produtos.length)

let valorTotal = 0

produtos.forEach((produto) =>{ 
    let valor = produto.preco * produto.estoque
    console.log(`ID: ${produto._id} ${produto.nome}: R$ ${produto.preco} | Estoque ${produto.estoque}`)
    valorTotal = valorTotal + valor
})

console.log(`Valor total: ${valorTotal}`)

await mongoose.disconnect()