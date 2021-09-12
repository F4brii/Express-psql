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

const getUserByDni = (request, response) => {
    const dni = parseInt(request.params.dni)

    pool.query('SELECT * FROM personas WHERE dni = $1', [dni], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const deletePerson = (request, response) => {
    const dni = parseInt(request.params.dni)

    pool.query('DELETE FROM personas WHERE dni = $1', [dni], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Person deleted with DNI: ${dni}`)
    })
}

module.exports = {
    getPersons,
    getUserByDni,
    deletePerson
};