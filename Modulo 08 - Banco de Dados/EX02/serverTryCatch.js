import express from "express"
import mongoose from "../conexao.js"
import Post from "./Post.js"

const router = express()
const port = 3000

router.use(express.json())

router.get("/posts/:id", async (req, res) =>{
    try {
        let post = await Post.findById(req.params.id)
        if(post === null)
        {
            return res.status(404).send({erro: "Post nao encontrado"})
        }
        res.send(post)
    } catch (erro) {
        res.status(400).send({erro: erro.message})
    }
})

router.post("/posts", async (req, res) =>{
    try {
        let post = await Post.create(req.body)
        res.status(201).send(post)
    } catch (erro) {
        res.status(400).send({erro: erro.message})
    }
})

// --------- Configurações -------------

router.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})
