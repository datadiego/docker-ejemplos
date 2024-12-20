const router = require('express').Router();
const User = require('../models/users');
const jwt = require('jsonwebtoken');

router.post('/login', (req, res) => {
    const user = req.body.username
    const password = req.body.password;
    console.log(user);
    if (User.isValidUser(user, password)) {
        const token = jwt.sign({ username: user.username}, 'secret');
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

module.exports = router;