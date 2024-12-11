const router = require('express').Router();
const datos_query = [];

router.get('/query', (req, res) => {
    res.json(datos_query);
});

router.post('/query', (req, res) => {
    const data = req.query;
    console.log(data)
    datos_query.push(data);
    res.json({"message": "Enviaste exitosamente datos a través de query", "input":data});
});

router.delete('/query', (req, res) => {
    datos_query = [];
    res.json({"message": "Datos eliminados exitosamente"});
});

module.exports = router;