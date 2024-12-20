const router = require('express').Router();
const User = require('../models/users');

router.get('/', (req, res) => {
    res.json(User.all());
});

router.get('/:id', (req, res) => {
    res.json(User.get(req.params.id));
});

router.post('/', (req, res) => {
    res.json(User.create(req.body));
});

router.put('/:id', (req, res) => {
    res.json(User.update(req.params.id, req.body));
});

router.delete('/:id', (req, res) => {
    res.json(User.delete(req.params.id));
});

module.exports = router;