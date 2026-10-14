function adicionarJogo(jogos, novoJogo){
    let codigoExiste = false;
    for(let i = 0; i < jogos.length; i++)
    {
        if(jogos[i].codigo === novoJogo.codigo)
        {
            codigoExiste = true
            break
        }
    }
    if(codigoExiste === true)
    {
        console.log(`O codigo ${novoJogo.codigo} ja esta registrado`)
    }

    if(jogos.length > 0)
    {
        let ultimoJogo = jogos[jogos.length - 1]
        novoJogo.id = ultimoJogo.id + 1
    }else{
        novoJogo.id = 1
    }
    
    jogos.push(novoJogo)
    return true
}

export default adicionarJogo