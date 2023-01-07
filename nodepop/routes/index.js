const express = require('express');
var router = express.Router();

const connection = require('../conn/connection.js')

const AdvertisementModel = require('../model/add.js')

function generateGetQuery(productName){
  
}

/* GET home page. */

/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */


router.get('/api/v1/advertisements/', function(req, res, next) {

  console.log(req.query)
  let page = req.query.page
  let limit = req.query.limit
  let tags = req.query.tags

  AdvertisementModel.find({}, null, {skip: parseInt(page), limit: parseInt(limit)}, function(err, result) {
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

router.get('/api/v1/advertisements/' + productName, function(req, res, next) {
  res.render('article' + req.params.nombre);

  console.log(req.query)
  let page = req.query.page
  let limit = req.query.limit
  let tags = req.query.tags

  AdvertisementModel.find({nombre: productName}, null, {skip: parseInt(page), limit: parseInt(limit)}, function(err, result) {
    res.json(result)
  })
});
