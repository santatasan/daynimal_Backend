const express = require('express');
const cors = require('cors');

// Db && dotenv config
require('dotenv').config();
require('./dbConfig');

const apiRouter = require('./routes/api');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', apiRouter);

const server = app.listen((process.env.PORT || 3000), () => {
    console.log('Listening on port', server.address().port)
});