require('dotenv').config("./env");
const {createRabbitConnection} = require("./config/index")
const {checkConnection } = require("./dal/authors")
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const authorRoutes = require("./routes/authors")
const axios = require("axios")

const app = express()
const port = 30002

app.use(cors())
app.use(bodyParser.json())
app.use("/api/author", authorRoutes)

app.get('/ping', function (req, res) {
    res.status(200).json({msg: "ping"})
})
app.get('/ping/auther', async function (req, res) {
    try {
        await axios.get(req.query.url)
        res.status(200).json({msg: "ping to auth", url: req.query.url})
    }
    catch (e){
        res.status(500).json({e: e.toString(), url: req.query.url ,msg: Math.random()* 1000})
    }
})

app.get('/health', async function (req, res) {
    await checkConnection()
    res.status(200).json({msg: "health"})
})
app.get('/env', async function (req, res) {
    res.status(200).json({env: process.env})
})

app.listen(port, () => {
    createRabbitConnection()
    console.log(`app listening at http://localhost:${port}`);
});

