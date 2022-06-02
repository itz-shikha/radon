
const express = require('express');
const res = require('express/lib/response');
const _ = require("lodash");

const externalModule1 =require('../logger/logger')
const externalModule2 =require('../util/helper')
const externalModule3 =require('../validator/formatter.js')

const router = express.Router();

router.get('/test-me', function (req, res) {

  externalModule1.welcome()

  externalModule2.date()
  externalModule2.month()
  externalModule2.info()

  externalModule3.formatter()


     res.send('My first ever api!')
});

router.get('/hello',function (req,res) {
    

let months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]

console.log(_.chunk(months, 4))

let x = [1,3,5,7,9,11,13,15,17,19]
  
let newArray = _.tail(x);
  
console.log(newArray);
   

let merge = _.union([20, 12], [8, 15, 6],[9,6,8],[34,12,5],[1,2,3]); 
        
console.log(merge)
  
let pairs = [['horror',"The Shining"],['drama',"Titanic"],['thriller',"Shutter Island"],['fantasy',"Pans Labyrinth"]]

let obj = _.fromPairs(pairs);
  
console.log(obj)
    res.send('Hello there!')   
   });



module.exports = router;
// adding this comment for no reason