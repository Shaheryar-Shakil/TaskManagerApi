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
        console.log(" Tasks Connected!");

    } else {
        console.log(err);
    }
});

module.exports.addTask=function(req,res){

    var post  = {CreatedBy: req.body.CreatedBy, Creation_date: req.body.Creation_date ,Deadline:req.body.Deadline, Description: req.body.Description ,Name:req.body.Name, Priority: req.body.Priority ,project_projectid:req.body.project_projectid, SkillsRquired: req.body.SkillsRquired  ,TeamMember_Email_id:req.body.TeamMember_Email_id,TaskStatus:req.body.TaskStatus};


    con.query('INSERT INTO `task` SET ?',post,(err,result)=>{
        if(err){
            console.log('an error has occured');
            res.status(404).send(err);
            console.log(err);
        }
        else
        {
            console.log("TasK Created");
        }

    });
};