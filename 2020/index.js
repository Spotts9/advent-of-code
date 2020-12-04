//BASE SETUP

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var lineReader = require('line-reader');

var day1 = require('./day1.js')
var day2 = require('./day2.js')

//configure app to user body parser()
//allows us to get data from a POST()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var validPasswordCnt = 0;

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
    
    var nums = req.body.input;
    
    res.json(day1.acct2(nums));
    
  });

router.route('/day2')
  .post(function(req,res){
    // console.log(req.body);
    var input = req.body.input;
    var toAdd = [];
    var validCnt = 0;
    
    lineReader.eachLine('input/day2.txt', function(line){
      line = line.replace(':', '');
      var pieces= [];
      pieces = line.split(" ");
      // console.log(pieces[0]);
      let minMax = pieces[0].split("-");
      let min = minMax[0];
      let max = minMax[1];
      let target = pieces[1];
      let pswrd = pieces[2];
      // console.log("Current Valid: " + validCnt.toString());
      // console.log("min: " + min + "  max: " + max + "  Target: "+ target+ "  input: " + pswrd);
      if (day2.isValidUpdated(target, min, max, pswrd)){
        console.log("isValid");
        validCnt ++;
        console.log(validCnt);
      }
    });

    // input.forEach(function(row){
    //   row = row.replace(':', '');
    //   var pieces= [];
    //   pieces = row.split(" ");
    //   console.log(pieces[0]);
    //   let minMax = pieces[0].split("-");
    //   let min = minMax[0];
    //   let max = minMax[1];
    //   let target = pieces[1];
    //   let pswrd = pieces[2];

    //   if (day2.isValidPassword(target, min, max, pswrd)){
    //     validCnt ++;
    //   }
    // });
    console.log("already returning");
    res.status(200).send(validCnt.toString());
  });

//REGISTER OUR ROUTES---------------------------------------------------------
//all of our routes will be prefixe with /API
app.use('/api', router);

//START THE SERVER
//=============================================================================
app.listen(port);
console.log("Christmas Magic happening on port " + port);
