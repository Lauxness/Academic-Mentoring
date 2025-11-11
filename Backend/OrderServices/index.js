const express = require("express");
const app = express();
const dotenv = require("dotenv");
const OrderRoute = require("./routes/order");

dotenv.config();

app.use(express.json());
app.use("/", OrderRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server connected to port ${PORT}`));
