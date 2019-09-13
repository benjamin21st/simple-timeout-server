const express = require('express');
const ngrok = require('ngrok');

const app = express();

app.get('/', (req, res) => {
    const { timeout } = req.query;

    setTimeout(() => {
        res.send(`Time out after: ${timeout} ms`);
    }, parseInt(timeout, 10));
});

app.listen(8989, async () => {
    console.log('Listening at: 8989');
    const publicUrl = await ngrok.connect(8989);

    console.log('Public accessible URL: ', publicUrl);
});
