const pool = require('../db')

class authorsDal {
    async addAuthor({name}) {
        const author = await pool.query('INSERT INTO authors (name) VALUES (?)',
            [name])
        return author[0].insertId
    }

    deleteAuthor(id) {
        return pool.query('DELETE FROM authors WHERE id = (?)',
            [id])
    }

    async getAuthor(id) {
        const author = await pool.query('SELECT * FROM authors WHERE id = (?)',
            [id])
        return author[0][0]
    }

    async updateAuthor(id, {name}) {
        await pool.query('UPDATE authors SET ' +
                             'name = (?)' +
                             'WHERE id = (?)',
            [name, id])
    }

    async getAuthors() {
        const authors = await pool.query('SELECT * FROM authors')
        return authors[0]
    }
}

module.exports = authorsDal
