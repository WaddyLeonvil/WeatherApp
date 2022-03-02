const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 5000;

let result;

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/express_backend', (req, res) => {
    res.json({ express: result });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));

