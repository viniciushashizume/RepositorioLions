function removerPets(pets, id)
{
    const indice = pets.findIndex((pet) => pet.id === id)

    if(indice === -1)
    {
        console.log("Erro: Pet não registrado")
        return false
    }

    pets.splice(indice,1)
    return true
}

export default removerPets