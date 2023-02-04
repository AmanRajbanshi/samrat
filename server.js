const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());

//Routes
const customerroute = require("./Route/CustomerRoute");

//Middlewares
app.use("/api/v1/", customerroute);

mongoose.set("strictQuery", false);
mongoose.connect(
  process.env.DB_CONNECTION,

  (err) => {
    try {
      console.log("connected to db");
    } catch (err) {
      console.log(err.message);
    }
  }
);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
