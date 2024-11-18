const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the API');
});

router.get('/data', (req, res) => {
    res.json({ message: "Hello, world!" });
});

module.exports = router;
