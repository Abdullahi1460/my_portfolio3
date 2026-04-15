const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the root directory
app.use(express.static(__dirname));

// Send index.html on root request
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle contact form submission
app.post('/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log('New Contact Form Submission:', { name, email, subject, message });
    
    // In a real app, you would send an email or save to a database here
    res.send('<h1>Thank you for your message!</h1><p>I will get back to you soon.</p><a href="/">Go Back</a>');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
