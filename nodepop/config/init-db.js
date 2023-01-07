const connection = require('../conn/connection.js')
const Advertisement = require('../model/add.js')
const data = require('../data/anuncios.json')

connection.dropCollection('advertisements').then(() => {
    data['anuncios'].forEach(advertisement => {
        Advertisement.create(advertisement, function (err) {
            if (err) return handleError(err);
        })
    })
})











