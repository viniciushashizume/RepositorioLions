import mongoose from "../conexao.js"
import Produto from "./Produto.js"

let produtos = await Produto.find()

let posicao = 0

if(posicao >= produtos.length)
{
    console.log("Produto não está nessa posição")
}else{
    let id = produtos[posicao]._id
    let removido = await Produto.findByIdAndDelete(id)
    console.log("Item removido: ", removido.nome)
}

await mongoose.disconnect()