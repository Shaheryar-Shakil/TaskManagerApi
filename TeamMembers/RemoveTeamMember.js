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
module.exports.DeleteTeamMember = function (req, res) {
    let local=req.params.Email_id;

        let delTeamMemberSql=`Delete from teammember where Email_id='${local}'`;

    let query= con.query(delTeamMemberSql,(err,result)=>{
        if(!result){
            res.status(404).send(err);
            console.log(err);
        }
        else

            console.log( 'No of rows effected'+result.affectedRows);

    });
    console.log(query.RowDataPacket())

};