const authorDal = new (require('../dal/authors'))()

class authorsLogic{
    addAuthor({name}) {
        return authorDal.addAuthor({name})
    }

    deleteAuthor(id) {
        return authorDal.deleteAuthor(id)
    }

    getAuthor(id) {
        return authorDal.getAuthor(id)
    }

    updateAuthor(id, author) {
        return authorDal.updateAuthor(id, author)
    }

    getAuthors() {
        return authorDal.getAuthors()
    }
}

module.exports = authorsLogic
