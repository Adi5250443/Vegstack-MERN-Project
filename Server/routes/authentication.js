const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt=require('jsonwebtoken');
const auth=require("../middleware/auth");

require("../database/connection");
const User = require("../Schema/userSchema");
const { default: authenticate } = require("../middleware/auth");

router.get("/", (req, res) => {
  res.send("Hello from the server");
});

// Post router
router.post("/signup", async (req, res) => {
  const { username, email, phone, password } = req.body;

  if (!username || !email || !phone || !password) {
    return res.status(422).json({ error: "Please fill the field properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "User already registered" });
    }

    const user = new User({ username, email, phone, password });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(user.password, salt);
    

  await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.log(err);
  }
});

// Login router

router.post("/signin",async (req, res) => {
    try {
      let token;
      const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill data" });
    }
    const userLogin = await User.findOne({ email: email });
       
   if(userLogin){
    const isMatch = await bcrypt.compare(password, userLogin.password);

    token=await userLogin.generateAuthToken();
    res.cookie("jwtoken",token,{
      expires:new Date(Date.now()+ 25892000000),
      httpOnly:true
    });

    if (!isMatch) {
      res.status(400).json({ error: "Invalid Credentials" });
      } else {
      res.json({ message: "User logged in successfully" });
      }
   } else{
   res.status(400).json({error:"Invalid credentials"});
  }
   }catch (err) {
    console.log(err);
   }
});

// Account router
router.get("/account",auth,(req,res)=>{
  res.send(req.rootUser);
})

// Logout router

router.get("/logout",(req,res)=>{
  res.clearCookie('jwtoken');
  res.status(200).send("User Logged out");
})

module.exports = router;
