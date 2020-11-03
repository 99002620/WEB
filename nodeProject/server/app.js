var express = require('express');
var app=express();
var bookList= require('./books.json');


app.get("/showBooks",function(req,res){
    res.status(200).send(bookList);
})

app.get("/showByAuthor",function(req,res){
    var author=req.query.author;
    var newList=[];
    bookList.forEach(book=>{
        if(book.author==author)
        newList.push(book);
    })
    res.status(200).send(newList);
})

app.get("/showByCategory",function(req,res){
    var category=req.query.category;
    var newList=[];
    bookList.forEach(book=>{
        if(book.category==category)
        newList.push(book);
    })
    res.status(200).send(newList);
})

app.listen('3000',function(){
    console.log("server running in 3000");
})
