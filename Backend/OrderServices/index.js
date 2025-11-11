const express = require("express");
const app = express();
const dotenv = require("dotenv");
const OrderRoute = require("./routes/order");
const mongoose = require("mongoose");

dotenv.config();

app.use(express.json());
app.use("/", OrderRoute);

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
