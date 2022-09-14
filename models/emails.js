const mongoose = require("mongoose");

const emailSchema = mongoose.Schema({
  email: {
    type: String,
  },

  Date: {
    type: "date",
    default: Date.now,
  },
});

module.exports = mongoose.model("email", emailSchema);
