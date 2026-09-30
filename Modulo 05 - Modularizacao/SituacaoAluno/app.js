import verificarSituacao from "./verificarSituacao.js"
import calcularMedia from "./calcularMedia.js"
import PromptSync from "prompt-sync"

const prompt = PromptSync()

let nota1 = Number(prompt("Digite a nota 1: "))
let nota2 = Number(prompt("Digite a nota 2: "))

let media = calcularMedia(nota1, nota2)

let situacao = verificarSituacao(media)

console.log("A situação do aluno é: " + situacao)
