const mongoose =require('mongoose');
const URI ="mongodb+srv://parkar23:parkar23@cluster0.vnuyl.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connectDB= async()=>{
   await mongoose.connect(URI,{useNewUrlParser: true,useUnifiedTopology: true});
   console.log('database connected...!')
}

module.exports = connectDB;