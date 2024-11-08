const express = require('express');
const Hangar = require('../models/Hanger');
const router = express.Router();

// Add Hangar
router.post('/', async (req, res) => {
  const hangar = new Hangar(req.body);
  await hangar.save();
  res.status(201).json(hangar);
});

// Get Hangars
router.get('/', async (req, res) => {
  const hangars = await Hangar.find();
  res.json(hangars);
});

module.exports = router;
