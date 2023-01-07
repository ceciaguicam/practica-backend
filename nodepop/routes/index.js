const express = require('express');
var router = express.Router();
const connection = require('../conn/connection.js')
const mongoosePaginate = require('mongoose-paginate-v2')
const AdvertisementModel = require('../model/add.js')




/* GET home page. */

router.get('/api/v1/advertisements/', function(req, res, next) {

  console.log(req.query)
  let page = req.query.page
  let limit = req.query.limit
  let name = req.query.name
  let sellOrBuy = req.query.sell
  let price = parseInt(req.query.price)
  let priceTop
  let priceBottom

  if (price <= 50) {
    priceBottom = 0
    priceTop = 50
  }
  else if(price > 50 && price <= 100){
    priceBottom = 100
    priceTop = 51 
  }
  else if(price > 100 && price <= 150){
    priceBottom = 150
    priceTop = 101
  }
  else if(price > 150 ){
    priceBottom = 151
  }

  const paginationOptions = {
    page: page,
    limit: limit
  }

  const filterOptions = {
    name: name,
    sellOrBuy: sellOrBuy,
    priceRange
  }

  /* AdvertisementModel.paginate({}, null, {skip: parseInt(page), limit: parseInt(limit)}, function(err, result) {
    res.json(result)
  }) */

  AdvertisementModel.paginate({}, paginationOptions, (err, result) => {
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

/* router.get('/api/v1/advertisements/:nombre', function(req, res, next) {
  res.render('nombre' + req.params.nombre);

  console.log(req.query)
  let page = req.query.page
  let limit = req.query.limit
  let tags = req.query.tags

  AdvertisementModel.find({}, null, {skip: parseInt(page), limit: parseInt(limit)}, function(err, result) {
    res.json(result)
  })
}); */
