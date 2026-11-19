import mongoose from "mongoose";

let UsuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, "O nome é obrigatorio"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "O email é obrigatorio"],
        trim: true,
    },
    senhaHash: {
        type: String,
        required: true,
        select: false, //senhaHash nao vira nas buscas
    },
})

let Usuario = mongoose.model("Usuario", UsuarioSchema)

export default Usuario