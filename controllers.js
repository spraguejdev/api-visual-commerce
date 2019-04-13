const model = require("./database/models/products");
module.exports = {
  getProducts: async (req, res) => {
    try {
      const results = await model.fetchProducts();
      res.status(200).send(results);
    } catch (err) {
      return res.status(404).send(err);
    }
  },
  productUpdate: async (req, res) => {
    try {
      const results = model.writeUpdate();
      res.status(201).send(results);
    } catch (err) {
      return res.status(201).send(data);
    }
  },
  getSingleItem: async (req, res) => {
    try {
      const results = model.fetchSingleProduct(req.query);
      return res.status(200).send(data);
    } catch (err) {
      return res.status(404).send(err);
    }
  },
  addProduct: async (req, res) => {
    try {
      const results = model.createProduct(req.body);
      return res.status(201).send(results);
    } catch (err) {
      return res.status(404).send(err);
    }
  }
};
