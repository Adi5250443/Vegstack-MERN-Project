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

// const PORT=process.env.PORT;

app.listen(5000,()=>{
    console.log("Server is running at port 5000");
})