import express from "express"
import mongoose from "../conexao.js"
import Post from "./Post.js"

const router = express()
const port = 3000

router.use(express.json())

// -------- Método GET ---------
router.get("/posts", async (req, res) =>
{
    let posts = await Post.find()
    res.send(posts)
})

router.get("/posts/:id", async (req, res) =>{
    if(!mongoose.isValidObjectId(req.params.id)){
        return res.status(400).send({erro: "ID inválido"})
    }

    let post = await Post.findById(req.params.id)

    if(post === null)
    {
        return res.status(404).send({erro: "Post não encontrado"})
    }

    res.send(post)
})

// --------- Método POST ------------
router.post("/posts", async (req, res) =>{
    let erro = new Post(req.body).validateSync()

    if(erro)
    {
        return res.status(400).send({erro : erro.message})
    }

    let post = await Post.create(req.body)
    res.status(201).send(post)
})

// --------- Método PUT ------------

router.put("/posts/:id", async (req, res) =>
{
    if(!mongoose.isValidObjectId(req.params.id)){
        return res.status(400).send({erro: "ID inválido"})
    }

    let post = await Post.findByIdAndUpdate(req.params.id, req.body)

    if(post === null)
    {
        return res.status(404).send({erro: "Post não encontrado"})
    }
    res.send({mensagem: "Post Atualizado"})
})

// --------- Método DELETE -------------

router.delete("/posts/:id", async (req, res) =>
{
    if(!mongoose.isValidObjectId(req.params.id)){
        return res.status(400).send({erro: "ID inválido"})
    }

    let post = await Post.findByIdAndDelete(req.params.id)

    if(post === null)
    {
        return res.status(404).send({erro: "Post não encontrado"})
    }
    res.send({mensagem: "Post Removido"})
})

// --------- Configurações -------------

router.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})