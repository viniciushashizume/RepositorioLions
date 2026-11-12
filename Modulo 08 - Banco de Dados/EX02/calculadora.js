function somar(a,b)
{
    return a + b
}

try {
    console.log(somar(1,2))
    console.log(multiplicar(5, 2))
}catch(error) {
    console.log("Erro: ", error.message)
}

console.log("Fim do código")