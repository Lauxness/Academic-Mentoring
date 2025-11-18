const express = require("express");
const app = express();
const dotenv = require("dotenv");
const UserRoute = require("./routes/users");
const mongoose = require("mongoose");
const {
  createProxyMiddleware,
  fixRequestBody,
} = require("http-proxy-middleware");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const INVENTORY_SERVICES_URL = process.env.INVENTORY_SERVICES;
const ORDER_SERVICE_URL = process.env.ORDER_SERVICES;

app.use("/users", UserRoute);
app.use(
  "/api/items",
  createProxyMiddleware({
    target: INVENTORY_SERVICES_URL,
    changeOrigin: true,
    logLevel: "debug",
    on: {
      proxyReq: fixRequestBody,
    },
  })
);

app.use(
  "/api/orders",
  createProxyMiddleware({
    target: ORDER_SERVICE_URL,
    changeOrigin: true,
    logLevel: "debug",
    on: {
      proxyReq: fixRequestBody,
    },
  })
);

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
