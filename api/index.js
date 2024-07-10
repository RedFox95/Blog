const express = require('express');
const app = express();
const PORT = 4000;

app.post('/register', (req, res, next) => {
    res.json('Registration test successful');
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});