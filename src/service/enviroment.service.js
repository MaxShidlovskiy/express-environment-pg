const { getAllDataDB, getDataByIdDB, createDataDB, updateDataDB ,deleteDataByIdDB } = require(`../repository/enviroment.repository`)

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

async function updateData(id, label, category, priority) {
    const data = await updateDataDB(id, label, category, priority);
    return data;
}

async function deleteDataById(id){
    const data = await deleteDataByIdDB (id);
    return data 
}


module.exports = { getAllData, getDataById, createData, updateData, deleteDataById }