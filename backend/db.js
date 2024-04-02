const mongoose = require("mongoose");

const connectToMongo = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/inotebook?directConnection=true")
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB: " + error.message);
    });
};
module.exports = connectToMongo;
