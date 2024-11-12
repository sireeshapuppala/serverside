const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST route to save text to a file
app.post('/save-text', (req, res) => {
    const { text } = req.body;
    const filePath = path.join(__dirname, 'text_output.txt');

    // Save the text to a file
    fs.writeFile(filePath, text, (err) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to save text' });
        }
        res.status(200).json({ message: 'Text saved successfully' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
