
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PresentationSchema = new Schema({
  topic: {
    type: String,
    required:'write something plz'
     },
  size: {
    type: String,
    
  },
  name: {
    type: String,
    
  },
  
  type_present: {
    type: [{
      type: String,
      enum: ['pdf', 'ppt']
    }],
    default: ['ppt']
  },
   url: {
    type: String,
    
  },
  responsible: {
    type: String,
    
  },
  updated_date: {
    type: Date,
    default: Date.now
  },
  tags: [{    
      type: String,
       
  }],

});

module.exports = mongoose.model('Presentations', PresentationSchema);