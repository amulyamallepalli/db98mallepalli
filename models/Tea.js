const mongoose = require("mongoose")
const TeaSchema = mongoose.Schema({
Brand: String,
Flavour: String,
Cost: Number
})
module.exports = mongoose.model("Tea", TeaSchema)