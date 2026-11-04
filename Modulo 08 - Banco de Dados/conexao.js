import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

await mongoose.connect(process.env.MONGO_URI, {dbName: "lionsdev"})
console.log("Conectado ao MongoDB")

export default mongoose