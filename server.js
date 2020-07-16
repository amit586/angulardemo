const express = require('express');

const app = express();

app.use(express.static('./dist/routing-practice'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/routing-practice/'}),
);

app.listen(process.env.PORT || 8080);
