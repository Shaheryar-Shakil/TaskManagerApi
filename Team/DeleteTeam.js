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
        console.log(" Delete Team Connected!");

    } else {
        console.log(err);
    }
});
module.exports.DeleteTeam = function (req, res) {
    let local=req.params.Teamid;

    let delProjectSql="Delete from team where Teamid="+ local;
    let query= con.query(delProjectSql,(err,result)=>{
        if(!result){
            res.status(404).send(err);
        }
        else

            console.log( 'No of rows effected'+result.affectedRows);

    });
    console.log(query.RowDataPacket())

};