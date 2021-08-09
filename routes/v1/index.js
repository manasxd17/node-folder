const routes = require('express').Router()
const auth_login = require('../../middleware/middleware')
module.exports = () => {
    routes.use('/user',auth_login, require('./user')())
    routes.use('/login',require('./login')())
    routes.use('/register',require('./register')())
    return routes
}