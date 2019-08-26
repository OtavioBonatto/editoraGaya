const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname + '/sobre.html'))
});

app.listen(process.env.PORT || 3000, () => console.log('servidor rodando'));