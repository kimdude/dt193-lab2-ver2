'use strict'

fastify.get('/', async(request, reply) => {
    return ({ hello: 'world' });
});