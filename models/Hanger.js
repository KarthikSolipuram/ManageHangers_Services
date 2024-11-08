const mongoose = require('mongoose');

const HangarSchema = new mongoose.Schema({
  companyId: mongoose.Schema.Types.ObjectId,
  location: String,
  size: String,
  facilities: String,
  availability: Boolean,
  rentalRate: Number,
});

module.exports = mongoose.model('Hangar', HangarSchema);
