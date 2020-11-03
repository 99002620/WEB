var express = require('express');
var app= express();

app.get('/',function(req,res){
    res.send('welcome to')
});

app.listen('3000',function(){
    console.log("server running in 3000");
})
/*
app.get("/loginUser",function(req,res){
    var name = req.query.username;
    var city= req.query.city;
    var newuser={username:name,city:city}
    res.send(newuser);
});


app.get("/search/:choice",function(req,res){
    var cab = req.params.choice;
    res.send("car is",+cab);
})

app.get("/searchCab/:choice/:type",function(req,res){
    var cab = req.params.choice;
    var cabType = req.params.type;
    res.send("car is",cab+'with'+cabType);
})

app.listen('3000',function()
{ 
    console.log('server running in port 3000');
 }) 
 app.get("/loginUser",function(req,res)
 {
      var uname=req.query.username; 
      var ucity=req.query.city; 
      var newuser={username:uname,city:ucity};
       res.send(newuser); 
    }); 
    app.get("/search/:choice",function(req,res)
    { 
        var cab=req.params.choice; 
        res.send("Your car choice is "+cab) 
    }) 
    app.get("/searchCab/:choice/:type",function(req,res)
    { 
        var cab=req.params.choice;
         var cabType=req.params.type; 
         res.send("Your car choice is "+cab+ ' with ' +cabType); 
        })
 app.get("/searchCabs/:choice/:type",function(req,res)
 {
      var cab=req.params; res.send(cab); 
    })
     [{ "title":"java in action", 
     "author":"Kathy",
      "price":1000, 
      "category":"Tech" },
       { "title":"java in action",
        "author":"Kathy",
         "price":1000,
          "category":"Tech" }, 
          { "title":"java in action",
           "author":"Kathy", 
           "price":1000, "category":"Tech" } ]*/

var bookList=require('./books.json');
    app.get("/showBooks",function(req,res){
           res.send(bookList);
           })
