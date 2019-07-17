const express = require('express');
const routes = express.Router();
const model = require('../model/model');

routes.get('', (req, res)=>{
    model.find({}, (err, rental)=>{
      res.json(rental);
    });
});

routes.get('/:id',(req,res)=>{
  const rentalId = req.params.id;
  model.findById(rentalId,(err, rental)=>{
    res.json(rental);
  })
})


module.exports = routes;
