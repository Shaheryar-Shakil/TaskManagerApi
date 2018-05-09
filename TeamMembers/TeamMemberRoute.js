var express=require('express');



var getting =require('./GetAllTeamMembers');                                           //// Gets All Teams Members
var creating =require('./CreateTeamMember');                                          ////  Creates A Team Member
var gettingSingle =require('./GetMemberData');                                       ////   Gets A TeamMember of a particular id
var deleting =require('./RemoveTeamMember');                                        ////    Deletes a Team Member
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });



var router=express.Router();

router.get('/',(req,res)=>                                         //// Gets All Tasks Related to a project
{

    getting.membersData(req,res);
});


router.get('/:Email_id',(req,res)=>                                         //// Gets All Tasks Related to a project
{

    gettingSingle.GetTeamMembersData(req,res);
});

router.post('/Create',urlencodedParser,(req,res)=>                           //// Gets All Tasks Related to a project
{
    creating.CreateTeamMember(req,res);

});




router.get('/Delete/:Email_id',urlencodedParser,(req,res)=>                   ////   Deletes A Task of a particular id
{
    deleting.DeleteTeamMember(req,res);

});










module.exports=router;