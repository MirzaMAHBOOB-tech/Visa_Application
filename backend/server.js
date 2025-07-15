const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contactroutes.js');
const mediaRoutes = require('./routes/mediaRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

mongoose.connect('mongodb://localhost:27017/visaMessages');

app.use('/api/contacts', contactRoutes);
app.use('/api/media', mediaRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
