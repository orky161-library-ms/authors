const authorDal = new (require('../dal/authors'))()

class authorsLogic{
    addAuthor({name}) {
        return authorDal.addAuthor({name})
    }

    deleteAuthor(id) {
        return authorDal.deleteAuthorById(id)
    }

    getAuthor(id) {
        return authorDal.getAuthorById(id)
    }

    updateAuthor(id, author) {
        return authorDal.updateAuthor(id, author)
    }

    getAuthors() {
        return authorDal.getAuthors()
    }
}

module.exports = authorsLogic
