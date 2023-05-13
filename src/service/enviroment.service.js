const { getAllDataDB, getDataByIdDB, createDataDB } = require(`../repository/enviroment.repository`)

async function getAllData() {
    const data = await getAllDataDB()
    return data
}

async function getDataById(id) {
    const filtered = await getDataByIdDB(id);
    return filtered;
}

async function createData(label, category, priority) {
    const data = await createDataDB(label, category, priority);
    return data;
}

module.exports = { getAllData, getDataById, createData }