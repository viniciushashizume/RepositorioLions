import mongoose from "../conexao.js"
import Produto from "./Produto.js"

let produtos = await Produto.find()
let i = 2

if(i >= produtos.length)
{
    console.log("Não existe produto nessa posicao")
}else{
    let id = produtos[i]._id
    await Produto.findByIdAndUpdate(id, {preco: 450, estoque: 3})
    console.log("Produto atualizado:", produtos[i].nome)
}

await mongoose.disconnect()