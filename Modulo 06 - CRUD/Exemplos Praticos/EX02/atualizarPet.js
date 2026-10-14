function atualizarPets(pets, id, novosDados)
{
    const indice = pets.findIndex((pet) => pet.id === id)

    if(indice === -1) //caso o id buscado não exista
    {
        console.log("Pet não encontrado na lista")
        return false
    }
    pets[indice].nome = novosDados.nome || pets[indice].nome
    pets[indice].especie = novosDados.especie || pets[indice].especie
    return true
}

export default atualizarPets