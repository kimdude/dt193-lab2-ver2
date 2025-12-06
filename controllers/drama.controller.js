const model = require('../models/drama.model');

//Getting all dramas
exports.getAllDramas = async function(fastify) {
    try {
        return await model.findAll(fastify);
    } catch(error) {
        throw error;
    }
}