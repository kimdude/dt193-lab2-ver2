require('dotenv').config();

//Requiring fastify-plugin to turn connection to a plugin
const fastifyPlugin = require('fastify-plugin');

//Connecting to database
async function dbConnector(fastify, options) {
    await fastify.register(require('@fastify/postgres'), {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        ssl: { rejectUnauthorized: false }
    });
}

module.exports = fastifyPlugin(dbConnector);
