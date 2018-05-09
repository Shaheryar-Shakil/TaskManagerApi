var mysql = require('mysql');
var express=require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"Teammanager"
});
con.connect(function(err) {
    if (!err) {
        console.log(" hi Connected!");

    } else {
        console.log(err);
    }
});

module.exports.add=function(req,res){
   // console.log(req.body);
    var post  = {Name: req.body.nameofuser, Address: req.body.address ,Phone_no:req.body.phone};


    con.query('INSERT INTO `person` SET ?',post,(err,result)=>{
        if(err){
            res.status(404).send(err);
            console.log(err);
        }
        else
        {
            console.log("inserted");
        }

    });
};