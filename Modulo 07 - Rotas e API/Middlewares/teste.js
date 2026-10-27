import express from "express";
let router = express();
let port = 3000;
router.use(express.json());
let filmes = [
{ id: 1, nome: "Carros" },
{ id: 2, nome: "Toy Story" },
];

function registrarLog(req, res, next) {
    console.log(`${req.method} - ${req.url}`)
    next()
}

router.use(registrarLog);

router.get("/filmes", (req, res) => {
res.send(filmes);
});

router.listen(port, () => {
console.log(`Filmes rodando na porta: ${port}`);
});