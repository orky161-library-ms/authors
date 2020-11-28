const {pool} = require('../config/index')
const {
    addAuthorQuery,
    deleteAuthorByIdQuery,
    getAuthorByIdQuery,
    updateAuthorQuery,
    getAuthorsQuery,
} = require("../query_builder/queries")

class authorsDal {
    async addAuthor({name}) {
        const author = await pool.query(addAuthorQuery, [name])
        return author[0].insertId
    }

    deleteAuthorById(id) {
        return pool.query(deleteAuthorByIdQuery, [id])
    }

    async getAuthorById(id) {
        const author = await pool.query(getAuthorByIdQuery, [id])
        return author[0][0]
    }

    async updateAuthor(id, {name}) {
        await pool.query(updateAuthorQuery, [name, id])
    }

    async getAuthors() {
        const authors = await pool.query(getAuthorsQuery)
        return authors[0]
    }
}

module.exports = authorsDal
