var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.con;
  var data ='';
  db.query('SELECT * from product', function(err, rows){
    if (err) {
      console.log(err);
    }
    data = rows;
    console.log(data);
    console.log(JSON.stringify(data));
    res.render('products', {title: '406100478', data: data});
  });

});
router.get('/delete', function(req, res, next) {
  var db = req.con;
  var id = req.query.id;
  db.query('DELETE * from product where id=?', id, function(err, rows){
    if (err) {
      console.log(err);
    }
    
    res.redirect('/products');
  });

});

module.exports = router;