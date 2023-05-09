const express = require(`express`);
const { getAllData } = require(`../service/enviroment.srvice`)
const route = express.Router();

route.get(`/`, async (req, res) => {
    const data = await getAllData()
    res.send(data)
})

module.exports = route