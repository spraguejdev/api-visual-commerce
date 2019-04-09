var mongoose = require("mongoose");
const db = mongoose.connect("mongodb://localhost/items", {
  useNewUrlParse: true
});

db.then(db => console.log("Connect to mongoose")).catch(err => {
  console.log("there was a problem connecto to mongo");
});

module.exports = db;
