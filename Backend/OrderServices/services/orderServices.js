const Orders = require("../models/orderModel");

const GetOrders = async (req, res) => {
  try {
    const orders = await Orders.find();

    return res.status(200).json(orders);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
};
const AddOrder = async (req, res) => {
  const order = req.body;
  try {
    const newOrder = await Orders.create(order);
    return res.status(200).json({ message: "New order added!" });
  } catch (err) {
    console.error(err);
  }
};
const DeleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedOrder = await Orders.findByIdAndDelete(id);

    return res.status(200).json({ message: "Order deleted!" });
  } catch (err) {
    console.log(err);
  }
};
const UpdateOrder = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const updatedOrder = await findByIdAndUpdate(id, body, {
      new: true,
    });
    return res.status(200).json({ message: "Order updated!" });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { GetOrders, AddOrder, DeleteOrder, UpdateOrder };
