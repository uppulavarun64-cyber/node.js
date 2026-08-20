const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;
// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname))); // Serve register.html
// Serve register.html when the user visits the root URL
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'register.html'));
});
// Handle form submission
app.post('/register', (req, res) => {
const { name, email, phone } = req.body;
// Log to console (or save to a file)
const userData = `Name: ${name}, Email: ${email}, Phone: ${phone}\n`;
fs.appendFileSync('registrations.txt', userData);
res.send(`<h2>Thank you for registering, ${name}!</h2>`);
});
// Start the server

app.listen(PORT, () => {
console.log(`Server is running at http://localhost:${PORT}`);
});
