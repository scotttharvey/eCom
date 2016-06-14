var express = require("express")
var bodyParser = require("body-parser")
var cors = require("cors")
var port = 3000;
var mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/ecom_project');
var app = express()
app.use(bodyParser.json())
var Schema = require("./public/js/serviceSchem.js")
app.use(express.static(__dirname + '/public'));

// var db = mongo("ecommerce", ['products'])
// var collection = db.collection('products')
// var ObjectId = mongo.ObjectId;


app.post("/api/products", function(req, res, next) {
    var schema = new Schema(req.body);
    schema.save(function(err, sol) {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(200).json(sol)
        }
    })


    // collection.insert(req.body, function(err, ans){
    //   if(err){
    //     return res.status(500);
    //   }
    //   return res.send(ans)
    // })
})

app.get("/api/products", function(req, res, next) {
    var query;
    if (req.query.id) query = {
        _id: req.query.id
    };
    else query = {};
    Schema.find(query, function(err, response) {
        if (err) res.status(500).json(err);
        else res.status(200).json(response);
    });
    // var query = req.query;
    // collection.find(query, function(err, ans){
    //   return res.send(ans)
    //   console.log(ans);
    // })
})

app.get("/api/products/:id", function(req, res, next) {
    // var idObj = {
    //   _id: req.params.id
    // }
    // collection.findOne(idObj, function(err, ans){
    //   if(!ans){
    //     return res.status(500);
    //   }
    //   return res.send(ans)
    // })
})

app.put("/api/products/:id", function(req, res, next) {
        var id = req.body.id;
        var body = req.body;
        Schema.findByIdAndUpdate(id, body, function(err, response) {
            if (err) return res.status(500).json(err);
            else return res.status(200).json(response);
        })
    })
    //
    //
    //   collection.update({_id: ObjectId(req.params.id)}, {$set: {name: req.body.name}}, function(err, ans){
    //
    //     return res.json(ans)
    //   })
    // })
    //
app.delete("/api/products/:id", function(req, res, next) {
    var idToFind = req.params.id;
    Schema.findByIdAndRemove(idToFind, function(err, response) {
        if (err) {
            res.status(500).json(err);
        } else res.status(200).json(response);

        // if(!req.params.id){
        //   return res.status(400).send('id query needed');
        // }
        // var query = {
        //   _id: mongo.ObjectId(req.params.id)
        // };
        // db.products.remove(query, function(error, response){
        //   if(error) {
        //     return res.status(500).json(error);
        //   } else {
        //     return res.json(response);
        //   }
        // });
    })
})
app.listen(port, function() {
    console.log("Working on ", port);
})