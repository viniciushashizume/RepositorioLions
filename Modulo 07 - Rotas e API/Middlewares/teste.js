import express from "express"

const router = express()
const port = 1331

let avaliacoes = []

router.use(express.json())

router.get("/avaliacoes", (req, res) => {
    res.send(avaliacoes)
})

function validarAvaliacao(req, res, next){
    if(!req.body.restaurante || isNaN(req.body.nota) || req.body.nota < 0 || req.body.nota > 5){{
        return res.status(400).send({erro: "Informe as informações ou as preencha corretamente!"})
    }
    next()
}

router.post("/avaliacoes", validarAvaliacao, (req, res) => {
    let restaurante = req.body.restaurante
    let nota = req.body.nota

    let id = 1
    if(avaliacoes.length > 0){
        id = avaliacoes[avaliacoes.length-1].id + 1
    }

    let avaliacao = {id:id, restaurante: restaurante, nota: nota }
    avaliacoes.push(avaliacao)

    res.status(201).send({mensagem: "Avaliação enviada!"})
})

router.listen(port, () => {
    console.log("Server -", port)
})}