const express = require(`express`);
const route = require(`./controller/enviroment.controller`)
const bodyParser = require(`body-parser`);

const app = express();

app.use (bodyParser.json());

app.use (`/enviroment`, route);

module.exports = app