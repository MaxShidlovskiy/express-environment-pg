const express = require(`express`);
const route = require(`./controller/enviroment.controller`)
const bodyParser = require(`body-parser`);

const app = express();

app.use(bodyParser.json());
app.use(`/enviroment`, route);

app.use((error, req, res, next) => res.send(error.message))

module.exports = app;