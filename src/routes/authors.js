require("express-async-errors")
const express = require('express')
const authorsLogic = new (require("../controller/authors"))()
const {permission_mw, auth_mw, equalId_mw} = require("../auth")
const {createAuthor} = require("./schemas/authors")
const validation_mw = require("./schemas/index")

const router = express.Router()

router.get("/", (async (req, res) => {
    const authors = await authorsLogic.getAuthors()
    res.status(200).json({authors})
}))
router.post("/", [auth_mw, permission_mw("ADMIN"), validation_mw(createAuthor)],(async (req, res) => {
    const author = await authorsLogic.addAuthor(req.body)
    res.status(201).json({author})
}))
router.get("/:id",(async (req, res) => {
    const author = await authorsLogic.getAuthor(req.params.id)
    res.status(200).json({author})
}))
router.put("/:id", [auth_mw, permission_mw("ADMIN"), validation_mw(createAuthor)],(async (req, res) => {
    await authorsLogic.updateAuthor(req.params.id, req.body)
    res.status(202).json({message: "success"})
}))
router.delete("/:id", [auth_mw, permission_mw("ADMIN")],(async (req, res) => {
    await authorsLogic.deleteAuthor(req.params.id)
    res.status(202).json({message: "success"})
}))

module.exports = router

