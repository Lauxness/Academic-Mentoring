const express = require("express");

const router = express.Router();
const {
  GetItems,
  AddItems,
  DeleteItems,
  UpdateItems,
} = require("../services/itemServices");

router.get("/", GetItems);
router.post("/", AddItems);
router.delete("/", DeleteItems);
router.patch("/", UpdateItems);

module.exports = router;
