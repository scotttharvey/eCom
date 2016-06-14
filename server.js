var express = require("express")
var bodyParser = require("body-parser")
var cors = require("cors")
var mongo = require("mongojs")
var app = express()
var port = 6969;
app.use(bodyParser.json())
var db = mongo("ecommerce", ['products'])
var collection = db.collection('products')
var ObjectId = mongo.ObjectId;


app.post("/api/products", function(req, res, next){
  collection.insert(req.body, function(err, ans){
    if(err){
      return res.status(500);
    }
    return res.send(ans)
  })
})

app.get("/api/products", function(req, res, next){
  var query = req.query;
  collection.find(query, function(err, ans){
    return res.send(ans)
  })
})

app.get("/api/products/:id", function(req, res, next){
  var idObj = {
    _id: req.params.id
  }
  collection.findOne(idObj, function(err, ans){
    if(!ans){
      return res.status(500);
    }
    return res.send(ans)
  })
})

app.put("/api/products/:id", function(req, res, next){


  collection.update({_id: ObjectId(req.params.id)}, {$set: {name: req.body.name}}, function(err, ans){

    return res.json(ans)
  })
})

app.delete("/api/products/:id", function(req, res, next){
  if(!req.params.id){
    return res.status(400).send('id query needed');
  }
  var query = {
    _id: mongo.ObjectId(req.params.id)
  };
  db.products.remove(query, function(error, response){
    if(error) {
      return res.status(500).json(error);
    } else {
      return res.json(response);
    }
  });
})


app.listen(port, function(){
  console.log("Working on ", port);
})
