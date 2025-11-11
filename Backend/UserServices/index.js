const express = require("express");
const app = express();
const dotenv = require("dotenv");
const UserRoute = require("./routes/users");
const mongoose = require("mongoose");

dotenv.config();

app.use(express.json());

app.use("/users", UserRoute);

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
