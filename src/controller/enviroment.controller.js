const express = require(`express`);
const { getAllData, getDataById, createData } = require(`../service/enviroment.service`)
const route = express.Router();

route.get(`/`, async (req, res) => {
    try {
        const data = await getAllData()
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
})

route.get(`/:id`, async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getDataById(id);
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
})

route.post(`/`, async (req, res) => {
    try {
        const { label, category, priority } = req.params;
        const data = await getDataById(label, category, priority);
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = route