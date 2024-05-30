const express = require("express")
const mongoose = require("mongoose")
const Prisoner = require("../models/prisoner")

const router = express.Router()

router.get("/", async (req, res) => {
    const prisoners = await Prisoner.find({})
    res.json(prisoners)
})

router.get("/:id", async (req, res) => {
    const prisoners = await Prisoner.find({_id:req.params.id})
    res.json(prisoners)
})

router.post("/", async (req, res) => {
    const prisoner = req.body
    await Prisoner.create(prisoner).then((v) => {
        res.status(200).json(v)
    }, (err) => {
        res.status(400).json(err)
    })
})

router.patch("/:id", async (req, res) => {
    const prisoner = req.body
    await Prisoner.updateOne({_id:req.params.id}, prisoner).then((v) => {
        res.status(200).json(v)
    }, (err) => {
        res.status(400).json(err)
    })
})

router.put("/:id", async (req, res) => {
    const prisoner = req.body
    if (!(prisoner.name && prisoner.sentance && prisoner.cause)) {
        res.status(400).json("Lacking one of required fields: name, sentence, cause")
        return
    }
    await Prisoner.updateOne({_id:req.params.id}, {
        name: prisoner.name,
        sentance: prisoner.sentance,
        cause: prisoner.cause
    }, { runValidators: true }).then((v) => {
        res.status(200).json(v)
    }, (err) => {
        res.status(400).json(err)
    })
})

router.delete("/:id", async (req, res) => {
    await Prisoner.deleteOne({_id:req.params.id}).then((v) => {
        res.status(200).json(v)
    }, (err) => {
        res.status(400).json(err)
    })
})

module.exports = router