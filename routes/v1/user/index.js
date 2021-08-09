const routes = require('express').Router()
module.exports = () => {
    routes.get('/all', require('./getAllUsers')());
    routes.get('/:id?', require('./getParticular')());
    routes.put('/:id', require('./updateUser')());
    return routes

}