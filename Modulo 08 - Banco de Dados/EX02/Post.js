import mongoose from "mongoose";

let postSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, "O titulo é obrigatorio"],
        minlength: [5, "O titulo precisa de pelo menos 5 letras"],
        trim: true,
    },
    categoria: {
        type: String,
        enum:{
            values: ["Noticia", "Tutorial", "Artigo"],
            message: "{VALUE} não é uma categoria válida"
        },
        default: "Noticia",
    },

    //Subdocumento do autor
    autor: {
        nome:{
            type: String,
            required: [true, "O nome do autor é obrigatorio"],
        }
    },

    //Subdocumento de Comentarios

    comentarios: [
        {
            texto: {
                type: String,
                required: [true, "O comentario precisa de um texto"]
            },
            curtidas: {
                type: Number,
                min: [0, "Curtidas não podem ser negativas"],
                default: 0,
            }
        }
    ]
})

let Post = mongoose.model("Post", postSchema)

export default Post