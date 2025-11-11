const express = require("express");
const router = express.Router();
const {
  GetOrders,
  AddOrder,
  DeleteOrder,
  UpdateOrder,
} = require("../services/orderServices");

router.get("/", GetOrders);
router.post("/", AddOrder);
router.patch("/:id", DeleteOrder);
router.delete("/:id", UpdateOrder);

module.exports = router;
