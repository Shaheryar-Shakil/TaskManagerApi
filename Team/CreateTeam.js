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
        console.log(" connected!");

    } else {
        console.log(err);
    }
});

module.exports.addteammembers=function(req,res){

    var post  = {title: req.body.title, Description: req.body.description };


    con.query('INSERT INTO `team` SET ?',post,(err,result)=>{
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