const routes = require('express').Router()
const auth_login = require('../../middleware/middleware')
module.exports = () => {
    routes.use('/user', require('./user')())
    routes.use('/login',require('./login')())
    return routes
}