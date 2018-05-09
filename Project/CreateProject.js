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

module.exports.addProject=function(req,res){

    var post  = {Admin_Eamil_id: req.body.Admin_Eamil_id, Creation_date: req.body.Creation_date ,Deadline:req.body.Deadline, description: req.body.description ,name:req.body.name, status: req.body.status ,Team_Teamid:req.body.Team_Teamid};


    con.query('INSERT INTO `project` SET ?',post,(err,result)=>{
        if(err){
            console.log('an error has occured');
            res.status(404).send(err);
            console.log(err);
        }
        else
        {
            console.log("inserted");
        }

    });
};