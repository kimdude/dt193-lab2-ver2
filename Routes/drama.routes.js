'use strict'
const dramaController = require('../controllers/drama.controller');

const schema = {
    body: {
        type: 'object',
        required: ['title','release_year','episodes','webtoon'],
        properties: {
            title: { type: 'string', minLength: 1 }, 
            release_year: { type: 'integer', minimum: 1900, maximum: 2027 }, 
            episodes: { type: 'integer', minimum: 1 }, 
            webtoon: { type: 'boolean' }, 
            genres: { 
                type: 'array',
                items: { type: 'integer' }
            },
            tags: { 
                type: 'array',
                items: { type: 'integer' }
            }
        }
    }
}

async function routes (fastify, options) {

    fastify.get('/', async (request, reply) => {
        const result = await dramaController.getAllDramas(fastify);
        if(result.length === 0) {
            throw new Error('No dramas found.')
        }

        return result;
    });

    fastify.post('/', { schema }, async (request, reply) => {
        return await dramaController.addDrama(fastify, request.body);
    });
}

//Exporting routes
module.exports = routes;


