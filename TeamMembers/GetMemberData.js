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
        console.log(" Get Members Data Connected!");

    } else {
        console.log(err);
    }
});
module.exports.GetTeamMembersData = function (req, res) {
    let local=req.params.Email_id;
    console.log('here');
    let getMembersCompleteSql="SELECT Email_id,Designation,salary,IsTeamLead,YearsofExperience,completedProjeccts," +
        "currentProjectCount,Address,Name,Phone_no\n" +
        "from teammember,person\n" +
        "where teammember.Person_Person_id=person.Person_id\n" +
        "and teammember.Email_id='"+ local+"'";
    console.log(getMembersCompleteSql);
    let query= con.query(getMembersCompleteSql,(err,result)=>{
        if(!result){
            res.status(404).send(err);
        }
        else

            console.log( result);

    });
    console.log(query.RowDataPacket())

};