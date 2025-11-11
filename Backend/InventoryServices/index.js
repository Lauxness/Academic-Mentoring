const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const ItemRoute = require("./routes/item");
const mongoose = require("mongoose");

app.use(express.json());
app.use("/items", ItemRoute);
const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Connected to DATABSE and server is Listening to port ${PORT}`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
