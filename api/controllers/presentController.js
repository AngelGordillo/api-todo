'use strict';
const Boom = require('boom');
var fs = require('fs');
var mongoose = require('mongoose'),
  Present = mongoose.model('Presentations');

exports.list_all_presentations = function(req, res) {
  Present.find({}, function(err, present) {
    if (err){
      res.send(err);
    }else{
      fs.writeFileSync("./listPresent", JSON.stringify(present))
      res.json(present);
      
    }

  });
};




exports.create_a_presentation = function(req, res) {
  var new_present = new Present(req.body);
  new_present.save(function(err, present) {
    if (err){
      res.status(400).send('Bad Request!')
    }else{

    res.json(present);
      //res.send(err);
    }
  });
};


exports.read_a_presentation = function(req, res) {
  Present.findById(req.params.presentId, function(err, present) {
    if (err)
      res.send(err);
    res.json(present);
  });
};


exports.update_a_presentation = function(req, res) {
  console.log(req.headers, res.body)
  Present.findOneAndUpdate({_id: req.params.presentId}, req.body, {new: true}, function(err, present) {
     if (err){
      res.status(400).send('Bad Request!')
    }else{
      fs.writeFileSync("./listPresent", JSON.stringify(present));          
      res.json(present);
      //res.send(err);
    }
  });
};


exports.delete_a_presentation = function(req, res) {

  Present.remove({
    _id: req.params.presentId
  }, function(err, present) {
    if (err)
      res.send(err);
    res.json({ message: 'Present successfully deleted' });
  });
};
