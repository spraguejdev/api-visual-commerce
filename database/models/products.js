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
  fetchProducts: callback => {
    Item.find((err, data) => {
      if (err) return callback(err);
      callback(null, data);
    });
  },
  writeUpdate: (data, callback) => {
    var newData = {};
    newData.name = data.name;
    newData.photo = data.photo;
    newData.product_id = data.product_id;
    newData.qty = data.qty;
    newData.product_type = data.product_type;
    var newItem = new Item(newData);
    const query = { product_id: data.product_id };
    Item.findOneAndReplace(query, newData, (err, data) => {
      console.log(data);
      if (err) callback(err);
      callback(null, data);
      // var newItem = new Item(data.product_id);
      // newItem.save((err, data) => {
      //   if (err) return callback(err);
      //   callback(null, data);
      // });
    });
  },
  fetchSingleProduct: (data, callback) => {
    var number = JSON.parse(data.product_id);
    const query = { product_id: number };
    Item.findOne(query, (err, data) => {
      if (err) callback(err);
      callback(null, data);
    });
  },
  createProduct: (data, callback) => {
    var newItem = new Item(data);
    newItem.save((err, data) => {
      if (err) return callback(err);
      callback(null, data);
    });
  }
};
