const router = require('express').Router();

router.get('/params', (req, res) => {
    res.json(datos_params);
});

router.post('/params/:param1/:param2', (req, res) => {
    const data = req.params;
    datos_params.push(data);
    res.json({"message": "Enviaste exitosamente datos a través de params", "input":data});
});

module.exports = router;
