const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/consultationDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB:', err));

// Define Mongoose Schema
const consultationSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    projectDetails: String,
    budget: String,
    timeline: String,
    hearAboutUs: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Define Mongoose Model
const Consultation = mongoose.model('Consultation', consultationSchema);

// Handle form submission
app.post('/submit', async (req, res) => {
    try {
        const consultation = new Consultation(req.body);
        await consultation.save();
        res.redirect('/success.html');
    } catch (error) {
        res.status(500).send('Error saving data.');
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});



// Serve static files
app.use(express.static('public'));

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
