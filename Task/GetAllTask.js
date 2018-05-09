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
module.exports.TasksData = function (req, res) {
    let local=req.params.project_projectid
    console.log(typeof(local));
    let getPersonSql="select * from task where project_projectid="+ local;
    let query= con.query(getPersonSql,(err,result)=>{
        if(!result){
            res.status(404).send('the person does not Exist');
        }
        else

            console.log( result);

    });
    console.log(query.RowDataPacket())

};