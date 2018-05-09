var mysql = require('mysql');
var express=require('express');
var admin=require('./Admin/GetAllUsers');
var app=express();




var project=require('./Project/ProjectRoute');                                  //Getting project Route
var task=require('./Task/TaskRoute');                                          //Getting task Route
var person=require('./person/PersonRoute');                                   //Getting person Route
var team=require('./Team/TeamRoute');                                        //Getting team Route
var teamMember=require('./TeamMembers/TeamMemberRoute');                    //Getting team Route



var path =require('path');
var bodyParser = require('body-parser');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"Teammanager"
});


con.connect(function(err) {
    if (!err) {
        console.log("Connected!");

    } else {
        console.log(err);
    }
});


app.use('/project',project);
app.use('/task',task);
app.use('/person',person);
app.use('/team',team);
app.use('/teamMember',teamMember);



app.get('/',(req,res)=>{
    res.send('hello');
});









app.listen(5000,function() {
    console.log("connection Created");
});