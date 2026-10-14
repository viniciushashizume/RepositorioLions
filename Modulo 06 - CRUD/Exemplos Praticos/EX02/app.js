import pets from "./pets.js";
import adicionarPet from "./adicionarPet.js";
import listarPets from "./listarPets.js";
import atualizarPets from "./atualizarPet.js";

/*let novoPet1 = {nome: "Bidu", especie: "Cachorro"}
let novoPet2 = {nome: "Tom", especie: "Gato"}

adicionarPet(pets, novoPet1)
adicionarPet(pets, novoPet2)

listarPets(pets)*/

console.log("Lista de Pets antes da atualização: ")
console.log("--------------")
listarPets(pets)

atualizarPets(pets, 2, {nome: "Salém Jr.", especie: ""})
console.log("Lista de Pets depois da atualização: ")
console.log("--------------")
listarPets(pets)

//---------------------------------//

/*let pets2 = []
adicionarPet(pets2,novoPet1)
console.log(pets2)*/