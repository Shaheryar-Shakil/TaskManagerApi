var express=require('express');



var getting =require('./GetAllTask');                                          //// Gets All Tasks Related to a project
var creating =require('./CreateTask');                                        ////  Creates A Task
var deleting =require('./DeleteTask');                                       ////   Deletes A Task of a particular id
var deletingByProject =require('./DeleteTaskByProject');                     ////   Delete Tasks Related to a Project


var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });



var router=express.Router();

router.get('/:projectid',(req,res)=>                                         //// Gets All Tasks Related to a project
{

    getting.TasksData(req,res);
});




router.post('/Create',urlencodedParser,(req,res)=>                           //// Gets All Tasks Related to a project
{
    creating.addTask(req,res);

});



router.get('/Delete/:TaskId',urlencodedParser,(req,res)=>                   ////   Deletes A Task of a particular id
{
    deleting.DeleteTask(req,res);

});






router.get('/DeleteAll/:projectid',urlencodedParser,(req,res)=>          ////   Delete Tasks Related to a Project
{

    deletingByProject.DeleteTaskbyProject(req,res);

});




module.exports=router;