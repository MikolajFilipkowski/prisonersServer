
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const router = require("./routes/prisoners")

const PORT = 8080

const app = express()

app.use(cors())

main()


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/prisoners').then(
        () => console.log("Connected successfully to the database"),
        (err) => {
            throw Error(`Connection failed, reason: ${err}`)
        }
    )

    app.use(express.json())
    app.use("/api/users",router)

    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`)
    })
}