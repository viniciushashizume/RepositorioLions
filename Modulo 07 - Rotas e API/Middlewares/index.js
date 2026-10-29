import express from 'express'

const router = express()
const port = 3000

router.use(express.json())

//registra o metodo e caminho de uma request
function registrarLog(req, res, next) 
{
    console.log(`${req.method} - ${req.url}`)
    next()
}

router.use(registrarLog)

let itens = [{id:1, nome:"Arroz", quantidade:2}]

router.get("/itens", (req, res)=>{
    res.status(200).send(itens)
})

// ============= POST =================

function gerarID (req, res, next){
    let id = 1
    if(itens.length > 0)
    {
        id = itens[itens.length - 1].id + 1
    }
    req.body.id = id
    next()
}

function validarItem(req, res, next){
    if(!req.body.nome || !req.body.quantidade){
        return res.status(400).send({erro: "Informe nome e quantidade"})
    }
    next()
}

router.post("/itens", validarItem, gerarID, (req, res) =>{
    let id = req.body.id
    let nome = req.body.nome
    let quantidade = req.body.quantidade

    let item = {id:id, nome:nome, quantidade:quantidade}
    itens.push(item)
    res.status(201).send(item)
})

// ======== DELETE ===========

function verificarSenha(req, res, next){
    if(req.headers.senha !== "lions123")
    {
        return res.status(401).send ({erro: "Autorização Negada"})
    }
    next()
}

router.delete("/itens/:id", verificarSenha, (req, res) => {
    let id = Number(req.params.id)
    let indice = itens.findIndex((item) => item.id === id)

    if(indice === -1)
    {
        return res.status(404).send({erro: "Item nao encontrado"})
    }
    itens.splice(indice, 1)
    res.send({mensagem: "Item removido"})
})

router.listen(port, ()=>{
    console.log(`Porta rodando em ${port}`)
})