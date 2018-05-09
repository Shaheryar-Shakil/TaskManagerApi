var express=require('express');



var getting =require('./GetPersonData');                                          //// Gets All Tasks Related to a project
var creating =require('./createPerson');                                        ////  Creates A Task



var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });



var router=express.Router();

router.get('/:personid',(req,res)=>                                         //// Gets Allpersons
{

   getting.PersonData(req,res)  ;
});




router.post('/Create',urlencodedParser,(req,res)=>                           ////Creates A person
{
    creating.add(req,res);

});







module.exports=router;