const router = require('express').Router();
const User = require('../models/users');
const jwt = require('jsonwebtoken');
const { isValidUser } = require('../models/auth');

router.post('/login', (req, res) => {
    const user = req.body.username
    const password = req.body.password;
    if (isValidUser(user, password)) {
        const token = jwt.sign({ user }, 'secret_key');
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Invalid login' });
    }
});

module.exports = router;