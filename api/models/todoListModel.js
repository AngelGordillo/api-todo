
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  title: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  responsible: {
    type: String,
    
  },
  description: {
    type: String,
    
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  priority: {
    type: [{
      type: String,
      enum: ['lowest', 'low', 'medium', 'hight', 'highest']
    }],
    default: ['lowest']
  },
 status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    

    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);