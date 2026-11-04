import mongoose from "mongoose";

let produtoSchema = new mongoose.Schema({
    nome: {type: String},
    categoria: {type: String},
    preco: {type: Number},
    estoque: {type: Number}
})

const Produto = mongoose.model("Produto", produtoSchema)

export default Produto