import express from "express"
import mongoose from "../conexao.js"
import Post from "./Post.js"
import jwt from "jsonwebtoken"
import { autenticar } from "./autenticar.js"
import dotenv from "dotenv"

const router = express()
const port = 3000

router.use(express.json())

router.post("/login", (req, res)=>{
    if(!req.body.email || !req.body.senha)
    {
        return res.status(400).send({erro: "Email e senha sao obrigatorios"})
    }
    let email = req.body.email
    let senha = req.body.senha

    if(email !== process.env.ADMIN_EMAIL || senha !== process.env.ADMIN_SENHA)
    {
        return res.status(401).send({erro: "Credenciais invalidas, acesso nao autorizado"})
    }
    let token = jwt.sign(
        {email: process.env.ADMIN_EMAIL, nome: process.env.ADMIN_NOME},
        process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_EXPIRES_IN}
    )
    res.send({token: token})
})

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

router.post("/posts", autenticar, async (req, res) =>{
    try {
        req.body.autor = {nome: req.usuario.nome} //opcional, depende do caso
        let post = await Post.create(req.body)
        res.status(201).send(post)
    } catch (erro) {
        res.status(400).send({erro: erro.message})
    }
})

router.delete("/posts/:id", autenticar, async (req,res)=>{
    try {
        let post = await Post.findByIdAndDelete(req.params.id)
        if(post === null)
        {
            return res.status(404).send({erro: "Post nao encontrado"})
        }
        res.send({mensagem: "Post Removido"})
    } catch (error) {
        res.status(400).send({erro: error.message})
    }
})

router.put("/posts/:id", autenticar, async (req,res)=>{
    try {
        delete req.body.autor //opcional, medida de segurança
        let post = await Post.findByIdAndUpdate(req.params.id, req.body)
        if(post === null)
        {
            return res.status(404).send({erro: "Post nao encontrado"})
        }
        res.send({mensagem: "Post Atualizado"})
    } catch (error) {
        res.status(400).send({erro: error.message})
    }
})

// --------- Configurações -------------

router.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})
