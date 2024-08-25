const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Census = require('./models/Census');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/censusDB')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


// CRUD Routes

// Create a new census record
app.post('/api/census', async (req, res) => {
    const newCensus = new Census(req.body);
    try {
        const census = await newCensus.save();
        res.status(201).json(census);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Read all census records
app.get('/api/census', async (req, res) => {
    try {
        const censusRecords = await Census.find();
        res.status(200).json(censusRecords);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update a census record
app.put('/api/census/:id', async (req, res) => {
    try {
        const census = await Census.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(census);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete a census record
app.delete('/api/census/:id', async (req, res) => {
    try {
        await Census.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Record deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Start the server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
