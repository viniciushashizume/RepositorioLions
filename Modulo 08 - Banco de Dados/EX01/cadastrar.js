import mongoose from "../conexao.js"
import Produto from "./Produto.js"

let teclado = await Produto.create({
    nome: "Teclado",
    categoria: "Periferico",
    preco: 149,
    estoque: 10
})
console.log("Produto salvo: ", teclado)

await Produto.create({
    nome: "Mouse",
    categoria: "Periferico",
    preco: 80,
    estoque: 20
})

await Produto.create({
    nome: "Monitor",
    categoria: "Monitores",
    preco: 550,
    estoque: 100
})

await mongoose.disconnect()