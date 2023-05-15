const express = require(`express`);
const { getAllData, getDataById, createData, updateData, deleteDataById } = require(`../service/enviroment.service`);
const { isValidId, isValidBody } = require(`../helper/validation`)
const { buildResponse } = require(`../helper/buildResponse`)
const route = express.Router();

route.get(`/`, async (req, res) => {
    try {
        const data = await getAllData()
        buildResponse(res, 200, data)
    } catch (error) {
        buildResponse(res, 404, error.message)
    }
})

route.get(`/:id`, isValidId, async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getDataById(id);
        buildResponse(res, 200, data)
    } catch (error) {
        buildResponse(res, 404, error.message)
    }
})

route.post(`/`, isValidBody, async (req, res) => {
    try {
        console.log(`+`);
        const { label, category, priority } = req.body;
        const data = await createData(label, category, priority);
        buildResponse(res, 200, data)
    } catch (error) {
        buildResponse(res, 404, error.message)
    }
});

route.put(`/:id`, isValidId, isValidBody, async (req, res) => {
    try {
        const { id } = req.params;
        const { label, category, priority } = req.body;
        const data = await updateData(id, label, category, priority);
        buildResponse(res, 200, data)
    } catch (error) {
        buildResponse(res, 404, error.message)
    }
})

route.delete(`/:id`, isValidId, async (req, res) => {
    try {
        const { id } = req.params
        const data = await deleteDataById(id)
        buildResponse(res, 200, data)
    } catch (error) {
        buildResponse(res, 404, error.message)
    }
})

module.exports = route