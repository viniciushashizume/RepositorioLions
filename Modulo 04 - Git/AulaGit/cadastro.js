let aluno = {
    nome: "Vinicius",
    idade: 16,
    curso: "Javascript",
    ativo: false
}

console.log("Nome: " + aluno.nome)
console.log("Idade: " + aluno.idade)
console.log("Curso: " + aluno.curso)

if(aluno.ativo === true)
{
    console.log("O aluno está ativo")
}else{
    console.log("O aluno está inativo")
}

if(aluno.idade >= 18)
{
    console.log("Maior de idade")
}else{
    console.log("Menor de idade")
}