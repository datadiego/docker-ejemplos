const express = require('express');
const app = express();
const port = 3000;

const datos_params = [];
const datos_body = [];

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const rutasMetodos = require('./routes/metodos');
const rutasQuery = require('./routes/query');
app.use(rutasMetodos);
app.use(rutasQuery);

app.get('/', (req, res) => {
    res.send('Bienvenido! Si lees esto, tu servidor está funcionando');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});