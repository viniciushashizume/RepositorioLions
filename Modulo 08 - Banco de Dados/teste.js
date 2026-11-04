import mongoose from "mongoose"
import dotenv from "dotenv"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

dotenv.config({path: path.join(__dirname, ".env")})

await mongoose.connect(process.env.MONGO_URI, )
console.log("Conectado ao MongoDB")