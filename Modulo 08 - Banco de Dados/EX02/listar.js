import mongoose from "../conexao.js"
import Post from "./Post.js"

let posts = await Post.find()

posts.forEach((post) => {
    console.log(`${post.titulo} | ${post.categoria} | ${post.autor.nome}`)
    //Acessa o array dentro do array | Post --> Comentarios
    post.comentarios.forEach((comentario) => {
        console.log(`${comentario.texto} ${comentario.curtidas}`)
    })
})

await mongoose.disconnect()