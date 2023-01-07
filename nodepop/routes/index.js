const express = require('express');
var router = express.Router();
const connection = require('../conn/connection.js')
const mongoosePaginate = require('mongoose-paginate-v2')
const AdvertisementModel = require('../model/add.js')

const params = ['page', 'limit', 'name', 'sellOrBuy', 'priceBottom', 'priceTop', 'tags']


/* GET home page. */

router.get('/api/v1/advertisements/', function(req, res, next) {

  let page = req.query.page
  let limit = req.query.limit
  let name = req.query.name
  let sellOrBuy = req.query.sellOrBuy
  let priceBottom = parseInt(req.query.priceBottom)
  let priceTop = parseInt(req.query.priceTop)
  
  let filter = {}

  params.forEach(param => {
    if(req.query.hasOwnProperty(param)){

      filter[param] = req.query.param
    }
  })

  console.log(filter)

  let advertisementsValues = {nombre: name, venta: sellOrBuy, precio: {'$gte': priceBottom, '$lte': priceTop}}


  const paginationOptions = {
    page: page,
    limit: limit
  }

  AdvertisementModel.paginate(advertisementsValues, paginationOptions, (err, result) => {
    res.json(result)
  })

});

router.post('/api/v1/advertisements', function(req, res) {
  AdvertisementModel.create(req.body)
    .catch((err) => {
      console.log(err)
    })
    .then(() => res.status(201).send())
});

module.exports = router;


