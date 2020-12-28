require("express-async-errors")
const express = require('express')
const authorsLogic = require("../controller/authors")
const {createAuthor} = require("./schemas/authors")
const validation_mw = require("./schemas/index")
const {LibraryRoles} = require("../../../library.io-libs/dist/roles");
const {libraryAuth} = require("../config/index")
const {verifyPermission, decodeToken, equalField} = libraryAuth

const router = express.Router()

router.get("/", (async (req, res) => {
    const authors = await authorsLogic.getAuthors()
    res.status(200).json({authors})
}))

router.get("/:id",(async (req, res) => {
    const author = await authorsLogic.getAuthor(req.params.id)
    res.status(200).json({author})
}))

router.put("/:id", [decodeToken, verifyPermission(LibraryRoles.AUTHOR), equalField("id"), validation_mw(createAuthor)],(async (req, res) => {
    await authorsLogic.updateAuthor(req.params.id, req.body)
    res.status(202).json({message: "success"})
}))

router.delete("/:id", [decodeToken, verifyPermission(LibraryRoles.AUTHOR), equalField("id")],(async (req, res) => {
    await authorsLogic.deleteAuthor(req.params.id)
    res.status(202).json({message: "success"})
}))

module.exports = router

