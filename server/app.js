const express = require('express');
const routes = require('./routes');
var helmet = require('helmet');
var cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use('/api', routes);

// I separate app listen from app file to setup test -> see server.js for port listen
module.exports = app;
