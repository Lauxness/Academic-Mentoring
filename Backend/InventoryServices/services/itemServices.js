const Items = require("../models/itemModel");

const GetItems = async (req, res) => {
  try {
    const items = await Items.find();
    return res.status(200).json(items);
  } catch (err) {
    console.error(err);
  }
};
const AddItems = async (req, res) => {
  const body = req.body;
  console.log("ahsdfjkhasdjkfhsaf");
  try {
    const addedItem = await Items.create(body);
    return res.status(200).json({ message: "Item added!" });
  } catch (err) {
    console.error(err);
  }
};
const DeleteItems = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Items.findByIdAndDelete(id);
    if (item) {
      return res.status(200).json({ message: "Items successfully delete!" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server Error" });
  }
};
const UpdateItems = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const updatedItem = await Items.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!updatedItem) {
      return res.status(404).json({ json: "No items found!" });
    }
    return res.status(200).json({ message: "Item updated!" });
  } catch (err) {
    console.error(err);
  }
};

module.exports = { GetItems, AddItems, DeleteItems, UpdateItems };
