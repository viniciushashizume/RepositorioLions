import express from "express"
import mongoose from "../conexao.js"
import Pedido from "./pedidos.js"

const router = express()
const port = 3000
 
router.use(express.json())

router.get("/pedidos", async (req, res) => 
{
    let pedidos = await pedido.find()
    res.send(pedidos)
})
router.get("/pedidos/:id", async (req, res) => {
    if(!mongoose.isValidObjectId(req.params.id)){
        return res.status(400).send({erro: "ID inválido"})
    }
    let pedido = await pedido.findById(req.params.id)
    if(pedido === null)
    {
        return res.status(404).send({erro: "Pedido não encontrado"})
    }
     res.send(pedido)
})
router.post("/pedidos", async (req, res) => {
    let erro = new Pedido(req.body).validateSync()
    if(erro )
    {
        return res.status(400).send({erro: erro.message})
    }
    let pedido = await Pedido.create(req.body)
    res.status(201).send(pedido)
})
router.put("/pedidos/:id", async (req, res)=> 
    {
    if(!mongoose.isValidObjectId(req.params.id)){
        return res.status(400).send({erro: "ID inválido"})
    } 
        let pedido = await pedidos.findByIdAndUpdate(req.params.id, req.body)
        if(pedido === null)
        {
          return res.status(404).send({erro: "Pedido não encontrado"})
        }
        res.send({mensagem: "Pedido Atualizado"})
})
router.delete("/pedidos/:id", async (req, res)=> 
    {
    if(!mongoose.isValidObjectId(req.params.id)){
        return res.status(400).send({erro: "ID inválido"})
    } 
        let pedido = await Pedido.findByIdAndDelete(req.params.id, req.body)
        if(pedido === null)
        {
          return res.status(404).send({erro: "Pedido não encontrado"})
        }
        res.send({mensagem: "Pedido emtrege"})
})
router.listen(port, ()=>{
    console.log(`Hamburguria rodando na porta ${port}`)
})