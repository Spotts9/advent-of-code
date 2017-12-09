//BASE SETUP

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var day1 = require('./day1.js')
var day1 = require('./day2.js')

//configure app to user body parser()
//allows us to get data from a POST()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

//ROUTES FOR datePieces
//=============================================================================
var router = express.Router();

//middleware to use for all requests
router.use(function(req, res,next){
  //do logging
  console.log('Something is happening');
  next(); //make sure to go to the next route and don't stop
});

//test route to make sure everything works
router.get('/', function(req, res){
  res.json({message:  "Ho Ho Ho!  Welcome to our API!"});
});

//more routes for our API will happen
router.route('/day1')
  .post(function(req,res){
    //console.log(req.body);
    var nums = req.body.input;
    //console.log(nums.split(''));
    res.json(day1.captcha2(nums.split('')));
    //res.json({nums.slice('')});
  });

router.route('/day2')
  .post(function(req,res){
    console.log(req.body);
    var nums = req.body.input;
    //console.log(nums.split(''));
    //res.json(day2.captcha2(nums.split('')));
    //res.json({nums.slice('')});
    res.status(200).send("got it");
  });

//REGISTER OUR ROUTES---------------------------------------------------------
//all of our routes will be prefixe with /API
app.use('/api', router);

//START THE SERVER
//=============================================================================
app.listen(port);
console.log("Christmas Magic happening on port " + port);
