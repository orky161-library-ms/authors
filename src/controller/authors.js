const AuthorsDal = require('../dal/authors')
const {sendEmail} = require("../queue/rabbit/producers/publish");


async function addAuthor({name, author, email}) {
    await AuthorsDal.addAuthor({name, authId: author})
    sendEmail(email, "Hello from Library.io, Thank you for sign-up")
}

function deleteAuthor(id) {
    return AuthorsDal.deleteAuthorById(id)
}

function getAuthor(id) {
    return AuthorsDal.getAuthorById(id)
}

function updateAuthor(id, author) {
    return AuthorsDal.updateAuthor(id, author)
}

function getAuthors() {
    return AuthorsDal.getAuthors()
}

module.exports = {
    addAuthor,
    deleteAuthor,
    getAuthor,
    updateAuthor,
    getAuthors
}
