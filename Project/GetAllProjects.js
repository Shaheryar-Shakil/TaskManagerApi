var mysql=require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"Teammanager"
});
con.connect(function(err) {
    if (!err) {
        console.log("Get all projects Connected!");

    } else {
        console.log(err);
    }
});
module.exports.AllProjectsData = function (req, res, next) {
    let s;
    let getprojectSql="select * from Project";
    con.query(getprojectSql,(err,result)=>{
        if(!result){
            res.status(404).send('No projects Exist');
        }
        else

            s=result;
     console.log(s);
        return (result);
    });


};