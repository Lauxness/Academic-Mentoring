const express = require("express");
const app = express();
const dotenv = require("dotenv");
const UserRoute = require("./routes/users");

dotenv.config();

app.use(express.json());

app.use("/users", UserRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server connected to port ${PORT}`));
