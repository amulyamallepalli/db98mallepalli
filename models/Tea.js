const mongoose = require("mongoose")
const TeaSchema = mongoose.Schema({
Brand: {
    type:String,
    required: [true, "Tea Brand is Required"]
},
Flavour: String,
Cost: {
   type: Number,
   min:[100,"Price of Tea should be minimum 100Rs"],
   max:[1000,"Price cannot be more than 1000Rs"]
},
})
module.exports = mongoose.model("Tea", TeaSchema)