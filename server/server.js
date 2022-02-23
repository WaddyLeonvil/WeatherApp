const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/express_backend', (req, res) => {
    res.json({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));

