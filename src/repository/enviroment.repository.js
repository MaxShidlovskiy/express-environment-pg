const pool = require(`../db`);
async function getAllDataDB() {
    const client = await pool.connect()
    const sql = `SELECT * FROM ENVIROMENT`;
    const result = (await client.query(sql)).rows
    return result;
}

module.exports = { getAllDataDB }