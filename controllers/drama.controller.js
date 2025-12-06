const model = require('../models/drama.model');

//Getting all dramas
exports.getAllDramas = async function(fastify) {
    try {
        return await model.findAll(fastify);
    } catch(error) {
        throw error;
    }
}

//Adding drama
exports.addDrama = async function(fastify, data) {
    try {
        const result = await model.add(fastify, data);
        return await result

    } catch(error) {
        throw error;
    }
}