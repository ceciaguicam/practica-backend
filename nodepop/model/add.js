const mongoose =  require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')


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

adverstisementSchema.plugin(mongoosePaginate)

const Advertisement = mongoose.model('Advertisement', adverstisementSchema)



module.exports = Advertisement


