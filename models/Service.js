const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  companyId: mongoose.Schema.Types.ObjectId,
  title: String,
  description: String,
  price: Number,
  availability: Boolean,
});

module.exports = mongoose.model('Service', ServiceSchema);
