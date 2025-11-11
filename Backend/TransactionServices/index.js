const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server connected to port ${PORT}`));
