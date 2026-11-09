import mongoose from "../conexao.js"
import Post from "./Post.js"

let post = await Post.create({
    titulo: "     Aula MongoDB",
    autor: {
        nome: "Vinicius"
    },
    comentarios: [
        { texto: "Aula muito boa", curtidas: 5 },
        { texto: "Não gostei da aula"}
    ]
})

console.log(`Post salvo: ${post.titulo}`)

await mongoose.disconnect()