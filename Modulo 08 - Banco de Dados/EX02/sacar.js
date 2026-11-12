function sacar(saldo, valor)
{
    if(valor > saldo)
    {
        throw new Error("Saldo Insuficiente")
    }

    return saldo - valor
}

try {
    console.log("Saque efetuado! Novo saldo: ", sacar(100,30))
    sacar(30,100)
} catch (error) {
    console.log("Saque Recusado:", error.message)
}