const routes = require('express').Router()
module.exports = () => {
    routes.get('/', require('./getAllUsers')()),
    routes.get('/:id', require('./getParticular')()),
    routes.put('/:id', require('./updateUser')()),
    routes.post('/',require('./resgister')())
    return routes

}