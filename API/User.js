const express =require('express');
const mongoose =require('mongoose');
const User =require('../DBconnection/userschema');
const route = express.Router();


route.post('/',async(req,res)=>{
    const{username,message}=req.body;
    let user ={};
    user.username=username;
    user.message=message;
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
});

module.exports = route;