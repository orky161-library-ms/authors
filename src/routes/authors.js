require("express-async-errors")
const express = require('express')
const authorsLogic = new (require("../bl/authors"))()

const router = express.Router()

router.get("/",(async (req, res) => {
    const authors = await authorsLogic.getAuthors()
    res.status(200).json({authors})
}))
router.post("/",(async (req, res) => {
    const author = await authorsLogic.addAuthor(req.body)
    res.status(200).json({author})
}))
router.get("/:id",(async (req, res) => {
    const author = await authorsLogic.getAuthor(req.params.id)
    res.status(200).json({author})
}))
router.put("/:id",(async (req, res) => {
    await authorsLogic.updateAuthor(req.params.id, req.body)
    res.status(202).json({message: "success"})
}))
router.delete("/:id",(async (req, res) => {
    await authorsLogic.deleteAuthor(req.params.id)
    res.status(202).json({message: "success"})
}))

module.exports = router

