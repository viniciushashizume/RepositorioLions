import jwt from "jsonwebtoken"

export function autenticar(req, res, next){
    let authHeader = req.headers.authorization

    if(!authHeader)
    {
        return res.status(401).send({erro: "Token nao recebido"})
    }
    let partes = authHeader.split(" ")

    if(partes[0] !== "Bearer" || !partes[1])
    {
        return res.status(401).send({erro: "Padrao de acesso invalido"})
    }

    // "partes [1] é o TOKEN"
    try {
        let dadosToken = jwt.verify(partes[1], process.env.JWT_SECRET)
        req.usuario = {email: dadosToken.email, nome: dadosToken.nome}
        next()
    } catch (error) {
        res.status(401).send({erro: "error.message"})
    }
}