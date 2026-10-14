function adicionarPets(pets, novoPet){

    if(pets.length > 0)
    {
        let ultimoPet = pets[pets.length - 1]
        novoPet.id = ultimoPet.id + 1

    }else{
        novoPet.id = 1
    }
    pets.push(novoPet)
    return true
}


export default adicionarPets

