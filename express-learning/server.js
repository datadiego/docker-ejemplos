const express = require('express');
const app = express();
const port = 3000;

const datos_query = [];
const datos_params = [];
const datos_body = [];

app.use(express.static("public"));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenido! Si lees esto, tu servidor está funcionando');
});

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
    console.log(data)
    datos_query.push(data);
    res.json({"message": "Enviaste exitosamente datos a través de query", "input":data});
});

app.delete('/query', (req, res) => {
    datos_query = [];
    res.json({"message": "Datos eliminados exitosamente"});
});

app.get('/params', (req, res) => {
    res.json(datos_params);
});

app.post('/params/:param1/:param2', (req, res) => {
    const data = req.params;
    datos_params.push(data);
    res.json({"message": "Enviaste exitosamente datos a través de params", "input":data});
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