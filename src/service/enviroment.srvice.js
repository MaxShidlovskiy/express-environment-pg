const { getAllDataDB } = require(`../repository/enviroment.repository`)
async function getAllData() {
    const data = await getAllDataDB();
    return data;
}

module.exports = { getAllData }