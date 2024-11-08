var cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/hangars', require('./routes/hangars'));
app.use('/api/services', require('./routes/service'));
app.use('/api/bookings', require('./routes/bookings'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
