import express from "express"

const router = express()
const port = 3000

router.use(express.json())

let time = {
    nome: "Lions",
    cidade: "Ponta Grossa",
    fundacao: 2026
}

let jogadores = ["Ana", "Bruna", "Carlos", "Daniel", "Eva"]

router.get("/", (req, res) =>{
    res.send("Seja bem vindo a API do clube")
})

router.get("/time", (req, res) =>{
    res.send(time)
})

router.get("/jogadores", (req, res) =>{
    res.send(jogadores)
})

router.listen(port, () => {
    console.log(`Clube rodando na porta: ${port}`)
})