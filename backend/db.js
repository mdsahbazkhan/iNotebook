const mongoose = require("mongoose");

const connectToMongo = () => {
  mongoose
    .connect("mongodb+srv://sahbazkhan:23042003$ah@cluster0.p1amxlo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB: " + error.message);
    });
};
module.exports = connectToMongo;
