var mongoose = require("mongoose");
const db = mongoose.connect(
  "mongodb+srv://john:zillowtalk@zillow-talk-db-ujzgi.mongodb.net/test?retryWrites=true"
);

db.then(db => console.log("Connect to mongoose")).catch(err => {
  console.log("there was a problem connecto to mongo");
});

module.exports = db;
