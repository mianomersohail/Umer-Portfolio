const express=require('express');
const routes=express.Router();
routes.get('/',function(req,res){
    res.render('crypto')
})
module.exports=routes;