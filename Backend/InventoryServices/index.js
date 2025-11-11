const express = require("express");
const app = express();
const dotenv = require("dotenv");
const ItemRoute = require("./routes/item");

dotenv.config();

app.use(express.json());
app.use("/", ItemRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server connected to port ${PORT}`));
