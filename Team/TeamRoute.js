var express=require('express');



var getting =require('./GetAllTeams');                                          //// Gets All Teams
var creating =require('./CreateTeam');                                        ////  Creates A Team
var deleting =require('./DeleteTeam');                                       ////   Deletes A Team of a particular id



var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });



var router=express.Router();

router.get('/',(req,res)=>                                         //// Gets All Tasks Related to a project
{

    getting.TeamData(req,res);
});




router.post('/Create',urlencodedParser,(req,res)=>                           //// Gets All Tasks Related to a project
{
    creating.addteammembers(req,res);

});



router.get('/Delete/:Teamid',urlencodedParser,(req,res)=>                   ////   Deletes A Task of a particular id
{
    deleting.DeleteTeam(req,res);

});










module.exports=router;