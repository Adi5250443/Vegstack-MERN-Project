const express = require("express");
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

if(process.env.NODE_ENV == "production")
{
    app.use(express.static("clint/build"));
}

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("Server is running at port $(PORT)");
})


