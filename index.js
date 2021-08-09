const express = require('express')
const app = express()
const bodyparser = require('body-parser')
require('dotenv').config()
app.listen(process.env.port, () => {
    console.log("Listening!")
})

const routeController = require('./routes/v1')()

const userService = require('./services/users')
// console.log(userService.getUserData()) 
// app.post('/', (req, res) => {
//     console.log("post request")
//     res.status(200).send({
//         "message":"Working fine"
//     })
// })

//app.get('/user', (req, res) => {
    //console.log("Header request",req.headers.authorization)
    //res.status(200).send({
        //"message":"Working fine"
    //})
//})

// app.post('/user', (req, res) => {
//     const data = req.body
//     console.log("Body request", data)
//     res.status(200).send({
//         "message":"Working fine"
//     })
// })

app.use(bodyparser.json({extended: true}));
app.use(routeController)