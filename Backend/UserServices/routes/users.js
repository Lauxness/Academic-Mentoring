const express = require("express");
const router = express.Router();
const {
  GetUsers,
  AddUser,
  DeleteUser,
  UpdateUser,
} = require("../services/userServices");

router.get("/", GetUsers);
router.post("/", AddUser);
router.patch("/", DeleteUser);
router.delete("/", UpdateUser);

module.exports = router;
