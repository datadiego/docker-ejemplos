const router = require('express').Router();

router.post("/test_formulario", (req, res) => {
    console.log(req)
    const texto = req.body.texto;
    res.send("Enviaste el texto: " + texto);
})

module.exports = router;