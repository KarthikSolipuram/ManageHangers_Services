const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  serviceId: mongoose.Schema.Types.ObjectId,
  hangarId: mongoose.Schema.Types.ObjectId,
  date: Date,
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
});

module.exports = mongoose.model('Booking', BookingSchema);
