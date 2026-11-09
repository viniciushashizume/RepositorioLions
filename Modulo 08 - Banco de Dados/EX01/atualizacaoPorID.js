import mongoose from "../conexao.js"
import Produto from "./Produto.js"

let id = "6aec67e88b30b0149e4a6846"

let produto = await Produto.findByIdAndUpdate(id, {preco:180, estoque: 12})

if(produto  === null)
{
    console.log("Produto não encontrado")
}else{
    console.log("Produto encontrado: ", produto.nome)
}

await mongoose.disconnect()