var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.json([{
  	id: 1,
    username: "406100478"
    
  }, {
  	id: 2,
  	username: "戴小雅"
  },{
  	id: 1,
  	username: "404411687"
  }, {
  	id: 2,
  	username: "黃子銓"
  }]);
 	
});

module.exports = router;
