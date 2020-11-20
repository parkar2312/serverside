const express = require('express');
const app = express();
const connectDB =require('./DBconnection/connection');

connectDB();

app.use(express.json({extended:false}))
app.use('/api/userModel', require('./API/User'));

const Port =process.env.Port || 5000;

app.listen(Port, ()=> console.log(`server started on port ${Port}`));