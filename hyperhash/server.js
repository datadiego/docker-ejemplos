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

//views
app.engine('squirrelly', require('squirrelly').renderFile);
app.set('view engine', 'squirrelly');
app.set('views', path.join(__dirname, 'views'));

//router
app.use('/api/users', require('./controllers/users'));
app.use('/api/auth', require('./controllers/auth'));

app.get('/', (req, res) => {
    //check for the jwt token
    const token = req.headers['x-access-token'];
    if (!token) {
        return res.render('login');
    }
    res.render('index');
});

app.get('/mensaje', (req, res) => {
    res.render('mensaje', { mensaje: 'Hola Mundo!' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});