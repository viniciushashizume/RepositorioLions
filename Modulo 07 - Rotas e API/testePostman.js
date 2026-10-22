import express from 'express'

const router = express()
const port = 3000

router.use(express.json())

let contatos = [
    {
        id: 1,
        nome: 'Ana',
        telefone: '1111-1111'
    },
    {
        id: 2,
        nome: 'Bruno',
        telefone: '2222-2222'
    }
]

router.get("/contatos", (req, res) => {
    res.send(contatos)
})

router.put("/contatos/:id", (req, res) => {
    console.log(req.headers['content-type'], req.body)
    let id = Number(req.params.id)
    let indice = contatos.findIndex((contato) => contato.id === id)
    
    contatos[indice].telefone = req.body.telefone

    res.send(contatos[indice])
})

router.delete("/contatos/:id", (req, res) => {
    let id = Number(req.params.id)
    let indice = contatos.findIndex((contato) => contato.id === id)

    contatos.splice(indice, 1)

    res.send({mensagem: "Contato removido"})
})

router.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})