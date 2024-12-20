const path = require('path');
const fs = require('fs');
const express = require('express');

const app = express();

//check if db exists
const dbPath = path.join(__dirname, 'db/db.sqlite');
if (!fs.existsSync(dbPath)) {
    require('./db/init');
}

//config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('views'));

//router
app.use('/api/users', require('./controllers/users'));
app.use('/api/auth', require('./controllers/auth'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});