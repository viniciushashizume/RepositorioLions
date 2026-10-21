import express from "express"

const router = express()
const port = 3000

router.use(express.json())

router.get("/", (req, res) =>{
    res.send("Seja bem vindo ao Cinema")
})

router.get("/filmes", (req, res) =>{
    res.send("Em cartaz: Toy Story, Velozes e Furiosos, Homem Aranha")
})

router.get("/horarios", (req, res) =>{
    res.send("Sessões disponiveis: 10:00 | 14:00 | 19:00")
})

router.listen(port, () => {
    console.log(`Cinema rodando na porta: ${port}`)
})