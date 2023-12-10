const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config()

mongoose
  .connect(
    "mongodb+srv://singhrimiumesh:RimiMongoDB@cluster0.h35s9ap.mongodb.net/"
  )
  .then(() =>
    app.listen(3500, () => console.log("Server is running on port 3000"))
  )
  .catch(e => console.log(e));
