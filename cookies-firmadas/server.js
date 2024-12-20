const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
const secretKey = 'your_secret_key';
app.use(cookieParser(secretKey));

const usuarios = [
    { id: 1, name: 'admin', password: '1234' },
    { id: 2, name: 'Ciclano', password: 'abcd' },
    { id: 3, name: 'Beltrano', password: 'abcd' }
];

const authMiddleware = (req, res, next) => {
    const userId = req.signedCookies.id;

    if (userId) {
        next();
    } else {
        res.status(401).send('No autorizado');
    }
};

app.post('/login', (req, res) => {
    const { name, password } = req.body;
    const user = usuarios.find(u => u.name === name && u.password === password);
    console.log(name, password)
    console.log(user)
    if (user) {
        res.cookie('id', user.id, { signed: true, httpOnly: true });
        res.send('Login exitoso');
    } else {
        res.status(401).send('Credenciales incorrectas');
    }
});

app.get('/private', authMiddleware, (req, res) => {
    res.send('Contenido privado, solo puedes ver esto si estás logueado');
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});