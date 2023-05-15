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
    console.log(label, category, priority);
    const sql = `INSERT INTO enviroment (label, category, priority) VALUES ($1,$2,$3) RETURNING *`

    const data = (await client.query(sql, [label, category, priority])).rows;

    return data

}

async function updateDataDB(id, label, category, priority) {

    const client = await pool.connect();
    console.log(id, label, category, priority);
    const sql = `UPDATE enviroment SET label=$1, category=$2, priority=$3 WHERE id =$4 RETURNING *`

    const data = (await client.query(sql, [label, category, priority, id])).rows;

    return data

}

async function deleteDataByIdDB(id) {
    const client = await pool.connect();
    const sql = `DELETE FROM enviroment WHERE id = $1 RETURNING *`;

    const data = (await client.query(sql, [id])).rows;

    return data
}



module.exports = { getAllDataDB, getDataByIdDB, createDataDB, updateDataDB,deleteDataByIdDB }