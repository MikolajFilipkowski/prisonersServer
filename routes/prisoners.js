const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).json("OK")
})

router.post("/", (req, res) => {
    res.status(200).json("OK")
})

router.patch("/", (req, res) => {
    res.status(200).json("OK")
})

router.put("/", (req, res) => {
    res.status(200).json("OK")
})

router.delete("/", (req, res) => {
    res.status(200).json("OK")
})

module.exports = router