const routes = require('express').Router()
module.exports = () => {
    routes.post('/',require('./loginUser')())
    return routes
}