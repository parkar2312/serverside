const mongoose = require('mongoose');


const user = new mongoose.Schema({
    username:{
        type:String
    },
    message:{
        type:String
    }
});

module.exports= User=mongoose.model('user',user);  