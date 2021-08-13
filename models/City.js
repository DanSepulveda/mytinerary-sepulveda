const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
    name: {type: String, required: true},
    prefecture: {type: String, required: true},
    src: {type: String, required: true},
    src2: {type: String, required: true},
    src3: {type: String, required: true} 
})

const City = mongoose.model('city',citySchema)

module.exports=City