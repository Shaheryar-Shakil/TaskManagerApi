var mysql=require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"Teammanager"
});
con.connect(function(err) {
    if (!err) {
        console.log(" Get all Teams Connected!");

    } else {
        console.log(err);
    }
});
module.exports.TeamData = function (req, res) {
    var result;

    let getMemberSql="select * from Team";
    con.query(getMemberSql,(err,result)=>{
        if(!result){
            res.status(404).send('the person does not Exist');
        }
        else
            console.log( result);


    });





};