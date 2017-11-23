'use strict';
module.exports = function(app) {
  var presentList = require('../controllers/presentController');

  // todoList Routes
  app.route('/presentation')
    .get(presentList.list_all_presentations)
    .post(presentList.create_a_presentation);


  app.route('/presentation/:presentId')
    .get(presentList.read_a_presentation)
    .put(presentList.update_a_presentation)
    .delete(presentList.delete_a_presentation);
    
  app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
};