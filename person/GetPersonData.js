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
        console.log(" Get person Connected!");

    } else {
        console.log(err);
    }
});
module.exports.PersonData = function (req, res) {                            //returns a specific person

    let getPersonSql="select * from Person where person_id="+ req.params.personid;
    let query= con.query(getPersonSql,(err,result)=>{
        if(!result){
            res.status(404).send('the person does not Exist');
        }
        else

        return result;

    });
console.log(query.RowDataPacket())
return query.RowDataPacket();
};