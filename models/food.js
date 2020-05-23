const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = Schema({
  type: String,
  landUseChange: Number,
  animalFeed: Number,
  farm: Number,
  processing: Number,
  transport: Number,
  packaging: Number,
  retail: Number,
});

module.exports = mongoose.model('Food', FoodSchema);
