const express = require('express');
const nunjucks = require('nunjucks');
const app = express();

// Configurar Nunjucks como el motor de vistas
nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.set('view engine', 'njk');

app.use(express.static('views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const objeto = {
        "mensaje": "Hola mundo!",
        "frutas": ["manzana", "pera", "uva"],
        "nombre": "user18927243",
        "magia": ""
    }
    res.render('mensaje.njk', objeto);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});