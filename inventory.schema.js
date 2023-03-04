const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const inventorySchema = new Schema({
  _id: Schema.Types.Number,
  sku: Schema.Types.String,
  description: Schema.Types.String,
  instock: Schema.Types.Number,
});

const inventoryModel = mongoose.model("inventorys", inventorySchema);
module.exports = inventoryModel;
