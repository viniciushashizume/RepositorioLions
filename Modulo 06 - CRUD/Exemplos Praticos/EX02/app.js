import promptSync from "prompt-sync";
import pets from "./pets.js";
import adicionarPet from "./adicionarPet.js";
import listarPets from "./listarPets.js";
import atualizarPets from "./atualizarPet.js";
import removerPets from "./removerPet.js";

const prompt = promptSync()

console.log("Antes da remoção")
listarPets(pets)

let id = Number(prompt("Digite o ID do pet que deseja remover: "))
let confirmar = prompt("Deseja realmente remover? (sim/nao)")

if(confirmar.toLowerCase() === "sim")
{
    removerPets(pets, id)
}else{
    console.log("Remoção Cancelada")
}

console.log("Depois da remoção")
listarPets(pets)


//---------------------------------//

/*let pets2 = []
adicionarPet(pets2,novoPet1)
console.log(pets2)*/