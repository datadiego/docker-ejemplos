const router = require('express').Router();
const User = require('../models/users');

router.get('/', (req, res) => {
    try {
        const users = User.all();
        res.status(200).json(users);
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Hubo un error', error });
    }
});

router.get('/:id', (req, res) => {
    try {
        const user = User.get(req.params.id);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(404).json({ error: 'User not found' });
    }
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