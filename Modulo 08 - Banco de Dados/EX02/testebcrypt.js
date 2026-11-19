import bcrypt from "bcryptjs"

let senha = "abobrinha123"

let hash = await bcrypt.hash(senha, 10)
let hash2 = await bcrypt.hash(senha, 10)


console.log(`Senha padrao: ${senha}`)
console.log(`Senha criptografada: ${hash}`)
console.log(`Senha criptografada: ${hash2}`)

console.log("Login autorizado: ", await bcrypt.compare("abobrinha12345", hash))