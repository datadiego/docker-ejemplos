const router = require('express').Router();

router.get('/body', (req, res) => {
    res.json(datos_body);
});

router.post('/body', (req, res) => {
    const data = req.body;
    datos_body.push(data);
    res.json({"message": "Enviaste exitosamente datos a través de body", "input":data});
});

module.exports = router;