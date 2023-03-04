const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new Schema({
  username: Schema.Types.String,
  password: Schema.Types.String,
  token: Schema.Types.String,
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
