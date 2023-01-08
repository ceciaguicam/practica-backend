const express = require('express');
var router = express.Router();
const connection = require('../conn/connection.js')
const mongoosePaginate = require('mongoose-paginate-v2')
const AdvertisementModel = require('../model/add.js')

const params = ['sellOrBuy', 'priceBottom', 'priceTop', 'name']


/* GET home page. */

let page = 1
let limit = 5

router.get('/api/v1/advertisements/', function(req, res, next) {

  if(req.query.page) {
    page = req.query.page
  }
  
  if(req.query.limit) {
    limit = req.query.limit
  }

  let priceBottom = parseFloat(req.query.priceBottom)
  let priceTop = parseFloat(req.query.priceTop)
  
  const filterValues = {}

  if(req.query.tags) {
    filterValues.tags = req.query.tags
  }

  if(req.query.priceBottom || req.query.priceTop){
    filterValues.price = {}
    if (req.query.priceBottom){
      filterValues.price['$gte'] = priceBottom
    }
    if(req.query.priceTop){
      filterValues.price['$lte'] = priceTop
    }
  }

  params.forEach(param => {
    
    if(req.query.hasOwnProperty(param)){
      filterValues[param] = req.query[param]
    }
  })

  console.log(filterValues)
  if(req.query.name){
    filterValues.name = new RegExp('^' + req.query.name, 'i')
  }
  

  console.log(filterValues)

  const paginationOptions = {
    page: page,
    limit: limit
  }

  AdvertisementModel.paginate(filterValues, paginationOptions, (err, result) => {
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


