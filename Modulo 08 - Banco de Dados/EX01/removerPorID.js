import mongoose from "../conexao.js"
import Produto from "./Produto.js"

let id = "6aeb183690281b2159306e7a"

let removido = await Produto.findByIdAndDelete(id)

if(removido === null)
{
    console.log("Produto não encontrado")
}else{
    console.log("Removido:", removido.nome)
}

await mongoose.disconnect()