
const checkConnectionQuery = "DO 1"

const addAuthorQuery = 'INSERT INTO authors (name) VALUES (?)'
const deleteAuthorByIdQuery = 'DELETE FROM authors WHERE id = (?)'
const getAuthorByIdQuery = 'SELECT * FROM authors WHERE id = (?)'
const updateAuthorQuery = 'UPDATE authors SET ' +
                     'name = (?)' +
                     'WHERE id = (?)'
const getAuthorsQuery = 'SELECT * FROM authors'


module.exports ={
    checkConnectionQuery,
    addAuthorQuery,
    deleteAuthorByIdQuery,
    getAuthorByIdQuery,
    updateAuthorQuery,
    getAuthorsQuery,
}
