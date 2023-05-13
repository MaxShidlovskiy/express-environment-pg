const pool = require(`../db`);

async function getAllDataDB() {
    const client = await pool.connect()

    const sql = `SELECT * FROM enviroment`

    const data = (await client.query(sql)).rows

    return data
}

async function getDataByIdDB(id) {
    const client = await pool.connect();

    const sql = `SELECT * FROM enviroment WHERE id = $1`

    const data = (await client.query(sql, [id])).rows

    return data

}
async function createDataDB(label, category, priority) {
    const client = await pool.connect();

    const sql = `SELECT * FROM enviroment WHERE id = $1`

    const data = (await client.query(sql, [id])).rows

    return data

}

module.exports = { getAllDataDB, getDataByIdDB, createDa }