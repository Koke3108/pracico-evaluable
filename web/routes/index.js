var express = require('express');
var router = express.Router();

var datos = require("../data/dataprovider");


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home', { head_title: "Principal" });
});


router.get('/debug/:category/:id', function (req, res, next) {
  console.log(req.body);
  console.log(req.hostname);
  console.log(req.params);
  console.log(req.query);
  res.send("ok");
});


module.exports = router;
