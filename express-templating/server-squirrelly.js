const express = require('express');
const squirrelly = require('squirrelly');
const app = express();

// Configurar Squirrelly como el motor de vistas
app.engine('squirrelly', squirrelly.__express);
app.set('view engine', 'squirrelly');
app.set('views', './views');

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
    res.render('mensaje.squirrelly', objeto);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});