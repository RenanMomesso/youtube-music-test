
const express = require('express');
const test = import("node-youtube-music");

const app = express();

app.get('/musics', async (req, res) => {
    const searchMusics = await (await test).searchMusics("michael jackson");
    console.log("🚀 ~ file: server.js:9 ~ app.get ~ searchMusics:", searchMusics)
    res.status(200).json({ searchMusics });
});



app.listen(5000, 'localhost', () => {
    console.log('Server running at http://localhost:5000/');
});
