const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose')
const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://Radon-Functionup-DB:K7Hvr5aCKNlYtYry@cluster0.1huana4.mongodb.net/Shikha-DB?retryWrites=true&w=majority',{
    useNewUrlParser:true
})
.then(()=>console.log("mongodb connected"))
.catch(err=>console.log(err))


app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});


