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
        console.log(" Get task Connected!");

    } else {
        console.log(err);
    }
});
module.exports.DeleteProject = function (req, res) {
    let local=req.params.projectid;

    let delProjectSql="Delete from project where projectid="+ local;
    let query= con.query(delProjectSql,(err,result)=>{
        if(!result){
            res.status(404).send(err);
        }
        else

            console.log( 'No of rows effected'+result.affectedRows);

    });
    console.log(query.RowDataPacket())

};