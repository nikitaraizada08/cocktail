const express = require('express');

const app = express();

app.use(express.static('./dist/cocktail'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/cocktail/'}),
);

app.listen(process.env.PORT || 8080);