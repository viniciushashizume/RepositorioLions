import express from "express"
import mongoose from "../conexao.js"
import bcrypt from "bcryptjs"
import Post from "./Post.js"
import Usuario from "./Usuario.js"
import jwt from "jsonwebtoken"
import { autenticar } from "./autenticar.js"
import dotenv from "dotenv"

const router = express()
const port = 3000

router.use(express.json())

router.post("/cadastro", async (req, res)=>{
    try {
        if(!req.body.nome || !req.body.email || !req.body.senha){
            return res.status(400).send({erro: "Nome, email e senha são obrigatorios"})
        }

        if(req.body.senha <= 8)
        {
            return res.status(400).send({erro: "Senha deve ter no minimo 8 caracteres"})
        }

        let email = req.body.email.trim()
        let existente = await Usuario.find({email:email}) //transforma em um array, para verificar se há algo dentro dele
        if(existente.length > 0)//verifica se existe emails iguais
        {
            return res.status(400).send({erro: "Email já esta cadastrado"})
        }
        let senhaHash = await bcrypt.hash(req.body.senha, 10)
        let usuario = await Usuario.create({
            nome: req.body.nome,
            email: email,
            senhaHash: senhaHash
        })
        res.status(201).send(usuario)
    } catch (error) {
        res.status(400).send({error: error.message})
    }
})

router.post("/login", async (req, res)=>{
    if(!req.body.email || !req.body.senha)
    {
        return res.status(400).send({erro: "Email e senha sao obrigatorios"})
    }
    let email = req.body.email
    let senha = req.body.senha

    //garante a integridade da segurança ao mesmo tempo que permite filtrar a senha
    let encontrados = await Usuario.find({email:email}).select("+senhaHash")
    if(encontrados.length === 0)
    {
        return res.status(401).send({erro: "Acesso não autorizado"})
    }
    let usuario = encontrados[0] //seleciona o UNICO usuario possivel dentro do array

    let senhaCorreta = await bcrypt.compare(senha, usuario.senhaHash)

    if(senhaCorreta === false)
    {
        return res.status(401).send({erro: "Credenciais invalidas"})
    }

    let token = jwt.sign(
        {email: usuario.email, nome: usuario.nome},
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
