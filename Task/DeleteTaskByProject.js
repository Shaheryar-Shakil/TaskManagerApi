var mysql=require('mysql');
var path =require('path');
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
        console.log(" Delete task Connected!");

    } else {
        console.log(err);
    }
});








module.exports.DeleteTaskbyProject = function (req, res) {
    let local=req.params.projectid;

    let deltaskbyprojectSql="Delete from Task where project_projectid="+ local;
    console.log(deltaskbyprojectSql);
    let query= con.query(deltaskbyprojectSql,(err,result)=>{
        if(!result){
            res.status(404).send(err);
        }
        else
            console.log( 'No of rows effected'+result.affectedRows);
    });



    console.log(query.RowDataPacket())







};