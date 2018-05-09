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
module.exports.DeleteTask = function (req, res) {
    let local=req.params.TaskId;

    let delProjectSql="Delete from Task where TaskId="+ local;
    let query= con.query(delProjectSql,(err,result)=>{
        if(!result){
            res.status(404).send(err);
        }
        else

            console.log( 'No of rows effected'+result.affectedRows);

    });
    console.log(query.RowDataPacket())

};