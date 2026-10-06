import pets from "./pets.js";
import adicionarPet from "./adicionarPet.js";

let novoPet1 = {nome: "Bidu", especie: "Cachorro"}
let novoPet2 = {nome: "Tom", especie: "Gato"}

adicionarPet(pets, novoPet1)
adicionarPet(pets, novoPet2)

console.log(pets)

//---------------------------------//

let pets2 = []
adicionarPet(pets2,novoPet1)
console.log(pets2)