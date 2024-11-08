const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

// Create Booking
router.post('/', async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.status(201).json(booking);
});

// Get Bookings
router.get('/', async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

module.exports = router;
