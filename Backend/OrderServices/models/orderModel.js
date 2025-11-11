const mongoose = require("mongoose");

const Schema = mongoose.Schema();

const orderModel = Schema(
  {
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "items",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("orders", orderModel);
