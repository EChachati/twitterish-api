const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");

const Connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/twitterish_api");
    console.log("Connected To DB!");
  } catch (error) {
    console.log("Unable To Connect: " + error);
    throw new Error("Unable To Connect to DB " + error);
  }
};

module.exports = {
  Connection,
};
