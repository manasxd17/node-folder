const routes = require('express').Router()
module.exports = () => {
    routes.post('/',require('./register')())
    return routes
}