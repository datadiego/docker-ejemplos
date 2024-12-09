const express = require('express');
const app = express();
const port = 3000;

const datos_query = [];
const datos_body = [];

app.get('/metodos', (req, res) => {
    res.send('Llamaste exitosamente al método GET');
});

app.post('/metodos', (req, res) => {
    res.send('Llamaste exitosamente al método POST');
});

app.put('/metodos', (req, res) => {
    res.send('Llamaste exitosamente al método PUT');
});

app.delete('/metodos', (req, res) => {
    res.send('Llamaste exitosamente al método DELETE');
});

app.get('/query', (req, res) => {
    res.json(datos_query);
});

app.post('/query', (req, res) => {
    const data = req.query;
    datos_query.push(data);
    res.json({"message": "Enviaste exitosamente datos a través de query", "input":data});
});

app.get('/body', (req, res) => {
    res.json(datos_body);
});

app.post('/body', (req, res) => {
    const data = req.body;
    datos_body.push(data);
    res.json({"message": "Enviaste exitosamente datos a través de body", "input":data});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});