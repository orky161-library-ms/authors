const {pool} = require('../config/index')
const {
    addAuthorQuery,
    deleteAuthorByIdQuery,
    getAuthorByIdQuery,
    updateAuthorQuery,
    getAuthorsQuery,
    checkConnectionQuery
} = require("../query_builder/queries")

async function addAuthor({name, authId}) {
    const author = await pool.query(addAuthorQuery, [name, authId])
    return author[0].insertId
}

function deleteAuthorById(id) {
    return pool.query(deleteAuthorByIdQuery, [id])
}

async function getAuthorById(id) {
    const author = await pool.query(getAuthorByIdQuery, [id])
    return author[0][0]
}

async function updateAuthor(id, {name}) {
    await pool.query(updateAuthorQuery, [name, id])
}

async function getAuthors() {
    const authors = await pool.query(getAuthorsQuery)
    return authors[0]
}

function checkConnection() {
    return pool.query(checkConnectionQuery)
}

module.exports = {
    addAuthor,
    deleteAuthorById,
    getAuthorById,
    updateAuthor,
    getAuthors,
    checkConnection
}
