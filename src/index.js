const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const route = require('./routes/route.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://AbhijitRadke:7768916626@cluster0.v76zsxi.mongodb.net/cryptocurrency'", { useNewUrlParser: true })
    .then(() => console.log('mongodb is connected'))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});