const router = require('express').Router();

router.get('/metodos', (req, res) => {
    res.send('Llamaste exitosamente al método GET');
});

router.post('/metodos', (req, res) => {
    res.send('Llamaste exitosamente al método POST');
});

router.put('/metodos', (req, res) => {
    res.send('Llamaste exitosamente al método PUT');
});

router.delete('/metodos', (req, res) => {
    res.send('Llamaste exitosamente al método DELETE');
});

module.exports = router;