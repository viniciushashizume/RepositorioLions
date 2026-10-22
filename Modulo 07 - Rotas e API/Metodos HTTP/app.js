import express from 'express'

const router = express()
const port = 3000

router.use(express.json())

let itens = [{id:1, nome:"Arroz", quantidade: 2}]

//------Metodo GET-------

router.get("/itens", (req, res) =>{
    res.send(itens)
})

router.get("/itens/:id", (req, res) =>{
    let id = Number(req.params.id)
    let indice = itens.findIndex((item) => item.id === id)

    if(indice === -1)
    {
        return res.status(404).send({erro: "Item não encontrado"})
    }

    res.send(itens[indice])
})
//-------Metodo POST--------

router.post('/itens', (req, res)=>{
    let nome = req.body.nome
    let quantidade = req.body.quantidade

    let id = 1

    if(!nome || !quantidade)
    {
        return res.status(400).send({erro: "Faltaram dados (400)"}) // Erro de falta de dados
    }

    if(itens.length > 0)
    {
        id = itens[itens.length - 1].id + 1
    }
    let item = {id: id, nome : nome, quantidade : quantidade}
    itens.push(item)
    res.status(201).send(item) //Cadastro bem sucedido
})

//------- Metodo PUT ---------

router.put("/itens/:id", (req, res)=>{
    let id = Number(req.params.id)
    let indice = itens.findIndex((item) => item.id === id)

    if(indice === -1)
    {
        return res.status(404).send({erro: "Item não encontrado"})
    }

    if(!req.body.quantidade)
    {
        return res.status(400).send({erro: "Faltaram dados (400)"}) // Erro de falta de dados
    }

    itens[indice].quantidade = req.body.quantidade

    res.send(itens[indice])
})

// --------- METODO DELETE ------------

router.delete("/itens/:id", (req, res) =>{
    let id = Number(req.params.id)
    let indice = itens.findIndex((item) => item.id === id)

    if(indice === -1)
    {
        return res.status(404).send({erro: "Item não encontrado"})
    }

    itens.splice(indice,1)

    res.send("Item removido")
})

router.listen(port, () =>
{
    console.log(`Sistema ligado na porta ${port}`)
})