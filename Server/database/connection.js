const mongoose = require("mongoose");

const dburl =
  "mongodb+srv://Aditya:aditya@cluster0.2ljonce.mongodb.net/users?retryWrites=true&w=majority"

const connectionparams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(dburl, connectionparams)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log("Error:", e);
  });


  module.exports=mongoose.connection;