const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const secretKey = 'your_secret_key';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser(secretKey));

const usuarios = [
    { id: 1, name: 'admin', password: '1234' },
    { id: 2, name: 'Ciclano', password: 'abcd' },
    { id: 3, name: 'Beltrano', password: 'abcd' }
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = usuarios.find(user => user.name === username && user.password === password);

    if (user) {
        res.cookie('user', JSON.stringify(user), { signed: true, secret: secretKey });
        res.send('Login exitoso');
    } else {
        res.status(401).send('Usuario o contraseña incorrectos');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});