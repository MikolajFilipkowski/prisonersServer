const express = require("express")
const router = require("./routes/prisoners")

const PORT = 8080

const app = express()

app.use(express.json())
app.use("/api/users",router)

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})