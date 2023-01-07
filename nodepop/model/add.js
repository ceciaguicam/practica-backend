//const { Schema, Model, Connection} =  require('mongoose')

const mongoose =  require('mongoose')


const adverstisementSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String],
    createAt: {
        type: Date, 
        default: Date.now,
    }
});

const Advertisement = mongoose.model('Advertisement', adverstisementSchema)

module.exports = Advertisement


/* 


; */

