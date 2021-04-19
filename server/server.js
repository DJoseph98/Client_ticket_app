const express = require('express');
const routes = require('./routes');
var helmet = require('helmet');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.use('/api', routes);

app.listen(3000);


