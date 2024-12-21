const express = require('express');
const ejs = require('ejs');
const app = express();

// Configurar EJS como el motor de vistas
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    const objeto = {
        "title": "Página Principal",
        "mensaje": "Hola mundo!",
        "frutas": ["manzana", "pera", "uva"],
        "nombre": "user18927243",
        "magia": ""
    }

    try {
        const body = await ejs.renderFile('views/mensaje.ejs', objeto);
        res.render('base', {
            title: objeto.title,
            body: body
        });
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/otro', async (req, res) => {
    const objeto = {
        "img" : "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        "title": "0123456890 esto lo inyectaste",
    }

    try {
        const body = await ejs.renderFile('views/otro.ejs', objeto);
        res.render('base', {
            title: objeto.title,
            body: body
        });
    }
    catch (err) {
        res.status(500).send(err);
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});