const model = require("./database/models/products");
module.exports = {
  getProducts: (req, res) => {
    model.fetchProducts((err, data) => {
      if (err) res.status(404).send(err);
      res.status(200).send(data);
    });
  },
  productUpdate: (req, res) => {
    model.writeUpdate(req.body, (err, data) => {
      if (err) res.status(404).send(err);
      res.status(201).send(data);
    });
  },
  getSingleItem: (req, res) => {
    model.fetchSingleProduct(req.query, (err, data) => {
      if (err) res.status(404).send(err);
      res.status(200).send(data);
    });
  },
  addProduct: (req, res) => {
    model.createProduct(req.body, (err, data) => {
      if (err) res.status(404).send(err);
      console.log("made it here, ", data);
      res.status(201).send(data);
    });
  }
};
