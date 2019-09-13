const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const { timeout, mockResponse } = req.query;

    setTimeout(() => {
        res.send(mockResponse || `Time is up after: ${timeout} ms`);
    }, parseInt(timeout, 10));
});

app.listen(8989, () => console.log('Listening at: 8989'))
