import express from 'express'

const router = express()
const port = 3000

router.use(express.json()) //permite que o express leia o JSON recebido do cliente

router.get("/", (req, res) =>{ //metodo get do http
    res.send("Bem vindo à Cafeteria LionsDev") //exibe mensagem no cliente
})

router.listen(port, () =>{ // "abrindo" a porta para as requisições
    console.log(`Cafeteria rodando na porta ${port}`) //mensagem de validação
})