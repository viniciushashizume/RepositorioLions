import jogos from "./jogos.js"
import adicionarJogo from "./adicionarJogo.js"

console.log(jogos)

let novoJogo1 = {nome: "Final Fantasy VII", codigo: "FF7"}
let novoJogo2 = {nome: "Super Mario", codigo: "mc01"}

adicionarJogo(jogos, novoJogo1)
adicionarJogo(jogos, novoJogo2)

console.log(jogos)