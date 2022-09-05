const mongoose = require("mongoose");

const reviewsSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  desc: {
    type: String,
  },
  Date: {
    type: "date",
    default: Date.now,
  },
});

module.exports = mongoose.model("reviews", reviewsSchema);
