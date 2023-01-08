const mongoose =  require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')


const adverstisementSchema = mongoose.Schema({
    name: String,
    sellOrBuy: Boolean,
    price: Number,
    image: String,
    tags: [String],
    createAt: {
        type: Date, 
        default: Date.now,
    }
});

adverstisementSchema.plugin(mongoosePaginate)

const Advertisement = mongoose.model('Advertisement', adverstisementSchema)



module.exports = Advertisement


