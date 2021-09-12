const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'express',
    password: 'Assemblix86*',
    port: 5432,
});

const getPersons = (req, res) => {
    pool.query('SELECT * FROM personas', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
};

module.exports = {
    getPersons
};