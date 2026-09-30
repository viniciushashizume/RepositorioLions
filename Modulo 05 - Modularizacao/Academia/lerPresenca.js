import fs from "node:fs"

function lerPresenca()
{
    return fs.readFileSync("presenca.txt", "utf-8")
}

export default lerPresenca