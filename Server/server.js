const express = require("express");
const path=require("path");
const mongoose=require("mongoose");
const app = express();
const dotenv=require("dotenv");
const cookieparser=require("cookie-parser");

require('./database/connection');

dotenv.config({path:'./config.env'});

const User=require('./Schema/userSchema');
app.use(express.json());
app.use(cookieparser());
app.use(require('./routes/authentication'));
app.use(express.static(path.join(__dirname,'./clint/build')));

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname,"./clint/build/index.html"));
});


const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("Server is running at port $(PORT)");
})


