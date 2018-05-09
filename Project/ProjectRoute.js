var express=require('express');



var getting =require('./GetAllProjects');                                          //// Gets All Projects From DataBases
var creating =require('./CreateProject');                                         ////  Creates A Project
var deleting =require('./DeleteProject');                                        ////   Deletes A person



var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });



var router=express.Router();
router.get('/',(req,res)=>
{

    console.log(Allproject.AllProjectsData());
})




router.post('/Create',urlencodedParser,(req,res)=>
{
    creating.addProject(req,res);

})





router.get('/Delete/:projectid',urlencodedParser,(req,res)=>
{
    deleting.DeleteProject(req,res);

})




module.exports=router;