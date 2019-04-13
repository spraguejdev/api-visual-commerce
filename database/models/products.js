const mongoose = require("mongoose");

var itemSchema = mongoose.Schema({
  name: String,
  product_id: Number,
  photo: String,
  product_type: { type: String, require: true },
  qty: Number,
  description: String
});

var Item = mongoose.model("Item", itemSchema);

module.exports = {
  fetchProducts: async () => {
    try {
      const results = await Item.find();
      return results;
    } catch (err) {
      return err;
    }
  },
  writeUpdate: async data => {
    try {
      var newData = {};
      newData.name = data.name;
      newData.photo = data.photo;
      newData.product_id = data.product_id;
      newData.qty = data.qty;
      newData.product_type = data.product_type;
      var newItem = new Item(newData);
      const query = { product_id: data.product_id };
      const results = Item.findOneAndReplace(query);
      return results;
    } catch (err) {
      return err;
    }
  },
  fetchSingleProduct: async data => {
    try {
      var number = JSON.parse(data.product_id);
      const query = { product_id: number };
      const results = Item.find(query);
      return results;
    } catch (err) {
      return err;
    }
  },
  createProduct: async data => {
    try {
      var newItem = new Item(data);
      const results = newItem.save(data);
      return results;
    } catch (err) {
      return err;
    }
  }
};
