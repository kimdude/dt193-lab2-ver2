'use strict';

/* Skapar typ egen modul */
//Finding dramas
exports.findAll = async function(fastify) {
    try {
        const result = await fastify.pg.query('SELECT * FROM full_info');
        return result.rows;

    } catch(error) {
        throw new Error ("Database error: " + error.message);
    }
}


