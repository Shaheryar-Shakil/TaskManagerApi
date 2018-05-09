var mysql=require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"Teammanager"
});
con.connect(function(err) {
    if (!err) {
        console.log("Get all Users Connected!");

    } else {
        console.log(err);
    }
});
module.exports.membersData = function (req, res) {
    let s;
    let getMemberSql="select * from teammember";

    con.query(getMemberSql,(err,result)=>{
        if(!result){
            res.status(404).send('the person doesn t Exist');
        }
        else


            s=result;

        console.log (result);
    });
    console.log('s');

};