'use strict'
const dramaController = require('../controllers/drama.controller');

async function routes (fastify, options) {

    fastify.get('/', async (request, reply) => {
        const result = await dramaController.getAllDramas(fastify);
        if(result.length === 0) {
            throw new Error('No dramas found.')
        }

        return result;
    });
    
}

//Exporting routes
module.exports = routes;


