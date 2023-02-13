const mongoose = require("mongoose");

const database = async () => {
  try {
    await mongoose.connect(process.env.Url);
    console.log("connected to the database");
  } catch (error) {
    console.log("Error", error);
  }
};

module.exports = database;
