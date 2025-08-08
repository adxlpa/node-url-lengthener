// server.js

// 1. Import necessary modules
const express = require('express');
const path = require('path');

// 2. Initialize the Express app
const app = express();
const PORT = process.env.PORT || 3000;

// 3. In-memory "database" to store URL mappings
// In a real application, you would use a proper database like PostgreSQL, MongoDB, or Redis.
const urlDatabase = {}; // Stores { 'random-path': 'original-url' }

// A simple array of words to construct the new path
const words = [
    'alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot', 'golf', 'hotel',
    'india', 'juliett', 'kilo', 'lima', 'mike', 'november', 'oscar', 'papa',
    'quebec', 'romeo', 'sierra', 'tango', 'uniform', 'victor', 'whiskey',
    'xray', 'yankee', 'zulu'
];

// 4. Middleware setup
app.use(express.json()); // To parse JSON bodies from incoming requests
app.use(express.static(path.join(__dirname, 'public'))); // To serve static files (HTML, CSS, JS)

// 5. API Endpoint to create a lengthened URL
app.post('/api/lengthen', (req, res) => {
    const { originalUrl } = req.body;

    // Basic validation
    if (!originalUrl) {
        return res.status(400).json({ error: 'originalUrl is required' });
    }

    try {
        new URL(originalUrl);
    } catch (error) {
        return res.status(400).json({ error: 'Invalid URL format' });
    }

    // Generate a unique random path
    let randomPath;
    do {
        randomPath = Array.from({ length: 4 }, () => words[Math.floor(Math.random() * words.length)]).join('-');
    } while (urlDatabase[randomPath]); // Ensure the path is unique

    // Store the mapping
    urlDatabase[randomPath] = originalUrl;

    // Construct the full lengthened URL
    const lengthenedUrl = `${req.protocol}://${req.get('host')}/${randomPath}`;

    // Send the new URL back to the client
    res.json({ lengthenedUrl });
});

// 6. Redirect Endpoint
// This handles requests to the lengthened URLs
app.get('/:randomPath', (req, res) => {
    const { randomPath } = req.params;
    const originalUrl = urlDatabase[randomPath];

    if (originalUrl) {
        // If the path is found in our database, redirect the user
        console.log(`Redirecting ${randomPath} to ${originalUrl}`);
        res.redirect(originalUrl);
    } else {
        // If the path is not found, send a 404 error
        res.status(404).send('URL not found');
    }
});

// 7. Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});