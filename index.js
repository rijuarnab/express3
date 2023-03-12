var express = require('express')
var app = express()

function getFunction(req, res){
    res.send('hi!')
}

app.get('/', getFunction)

app.listen(5555)