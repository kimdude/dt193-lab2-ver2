'use strict';

//Getting Fastify
const fastify = require('fastify')({
    logger: true
});

//Database
fastify.register(require('./db/db'));

//Routes
fastify.register(require('./routes/drama.routes'));

//Connecting to server
const start = async() => {
    try {
        await fastify.listen({ port: 5000, host: '0.0.0.0' });
    } catch(err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

start();