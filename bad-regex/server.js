const express = require('express');
const app = express();

// Ruta que valida un nombre de usuario con una expresión regular
app.get('/validate', (req, res) => {
    const username = req.query.username;

    if (!username) {
        return res.status(400).send('Username is required');
    }

    // Expresión regular vulnerable
    const regex = /^(([a-z])+.)+[A-Z]([a-z])+$/

    if (regex.test(username)) {
        res.send('Valid username');
    } else {
        res.status(400).send('Invalid username');
    }
});

// Servidor en escucha
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
