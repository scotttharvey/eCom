var express = require("express")
var bodyParser = require("body-parser")
var cors = require("cors")
var port = 3000;
var mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/ecom_project');
var app = express()
app.use(bodyParser.json())
var Schema = require("./public/services/serviceSchem.js")
app.use(express.static(__dirname + '/public'));

app.post("/api/products", function(req, res, next) {
    Schema.create(req.body, function(err, sol) {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(200).json(sol)
        }
    })
})
app.post("/api/user/", function(req, res, next) {
    Schema.create(req.body, function(err, sol) {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(200).json(sol)
        }
    })
})
app.post("/api/order/:user_id`", function(req, res, next) {
    Schema.create(req.body, function(err, sol) {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(200).json(sol)
        }
    })
})

app.get("/api/products", function(req, res, next) {
    Schema.find(function(err, sol){
      if(err){
        res.status(500).json(err)
      }
      else{
        res.status(200).json(sol)
      }
    })
})
app.get("/api/order/", function(req, res, next) {
    Schema.find(function(err, sol){
      if(err){
        res.status(500).json(err)
      }
      else{
        res.status(200).json(sol)
      }
    })
})

app.get("/api/products/:id", function(req, res, next) {})
app.get("/api/user/:id", function(req, res, next) {})

app.post("/api/cart/:user_id", function(req, res, next) {})


app.put("/api/products/:id", function(req, res, next) {
    var id = req.body.id;
    var body = req.body;
    Schema.findByIdAndUpdate(id, body, function(err, response) {
        if (err) return res.status(500).json(err);
        else return res.status(200).json(response);
    })
})
app.put("/api/cart/:user_id", function(req, res, next) {
    var id = req.body.id;
    var body = req.body;
    Schema.findByIdAndUpdate(id, body, function(err, response) {
        if (err) return res.status(500).json(err);
        else return res.status(200).json(response);
    })
})
app.delete("/api/products/:id", function(req, res, next) {
    var idToFind = req.params.id;
    Schema.findByIdAndRemove(idToFind, function(err, response) {
        if (err) {
            res.status(500).json(err);
        } else res.status(200).json(response);
    })
})
app.listen(port, function() {
    console.log("Working on ", port);
})
