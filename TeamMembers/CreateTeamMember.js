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

module.exports.CreateTeamMember=function(req,res){

    var post  = {Email_id: req.body.Email_id,
        password: req.body.password,
        Person_Person_id: req.body.Person_Person_id
    };



    con.query('INSERT INTO `teammember` SET ?',post,(err,result)=>{
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