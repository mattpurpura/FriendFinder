var express = require("express");
var bodyParser = require('body-parser')
var path = require("path");

module.exports = function(app){
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"))
        })
    
    app.use('/public/images', express.static(path.join(__dirname, '/../public/images')));
    
    app.use( function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"))
    })
}


    
