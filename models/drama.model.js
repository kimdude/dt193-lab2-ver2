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

//Adding new drama
exports.add = async function(fastify, data) {

    const { title, release_year, episodes, webtoon, genres, tags } = data;

    try {
        //Adding drama
        const dramaResult = await fastify.pg.query(`INSERT INTO lab2_dramas (title, release_year, episodes, webtoon) VALUES ($1, $2, $3, $4) RETURNING drama_id,title;`, 
            [title, release_year, episodes, webtoon]);
        
        const drama_id = dramaResult.rows[0].drama_id;

        //Adding genres
        for(let i = 0; i < genres.length; i ++) {
            await fastify.pg.query(`INSERT INTO lab2_categorized (genre_id, drama_id) VALUES ($1, $2)`,
            [genres[i], drama_id]);
        }

        //Adding tags
        for(let i = 0; i < tags.length; i ++) {
            await fastify.pg.query(`INSERT INTO lab2_tagged (tag_id, drama_id) VALUES ($1, $2)`,
            [tags[i], drama_id]);
        }

        return await dramaResult.rows[0].title;

    } catch(error) {
        throw new Error ("Database error: " + error.message);
    }

}

