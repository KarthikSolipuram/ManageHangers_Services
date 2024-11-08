const express = require('express');
const Service = require('../models/Service');
const router = express.Router();

// Add Service
router.post('/', async (req, res) => {
  const service = new Service(req.body);
  await service.save();
  res.status(201).json(service);
});

// Get Services
router.get('/', async (req, res) => {
  const services = await Service.find();
  res.json(services);
});

module.exports = router;
