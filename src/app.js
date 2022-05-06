const express = require('express');
const artistRouter = require('./routes/artist');
const albumRouter = require('./routes/album');
const app = express();
app.use(express.json());

app.use('/artist', artistRouter);
app.use('/album', albumRouter);

module.exports = app;
