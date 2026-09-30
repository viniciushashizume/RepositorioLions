import fs from "node:fs"

function registrarPresenca(nome)
{
    fs.appendFileSync("presenca.txt", nome + ", ")
}

export default registrarPresenca