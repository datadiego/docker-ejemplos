const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const usuarios = [
    { id: 1, name: 'admin', password: '1234' },
    { id: 2, name: 'Ciclano', password: 'abcd' },
    { id: 3, name: 'Beltrano', password: 'abcd' }
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(username, password)
    const user = usuarios.find(user => user.name === username && user.password === password);

    if (user) {
        res.cookie('user', JSON.stringify(user));
        res.send('Login realizado con exito');
    } else {
        res.status(401).send('Usuario no valido');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

