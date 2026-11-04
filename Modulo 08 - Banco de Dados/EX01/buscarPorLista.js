import mongoose from "../conexao.js"
import Produto from "./Produto.js"

let produtos = await Produto.find()
let posicao = 1

if(posicao >= produtos.length)
{
    console.log("Não existe produto nessa posição")
}else{
    let id = produtos[posicao]._id
    let produto = await Produto.findById(id)
    console.log("Nome: ", produto.nome)
    console.log("Preço: ", produto.preco)
}

await mongoose.disconnect()