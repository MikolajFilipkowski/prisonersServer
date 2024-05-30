const mongoose = require("mongoose");

const Prisoner = mongoose.Schema({
    name:{type:String, required:true},
    sentence:{type:Number, required:true},
    cause:{type:String, required:true}
}, {versionKey: false})

module.exports = mongoose.model("Prisoner",Prisoner)