const userService = require('../../../services/users')
module.exports = () => {
    return (req,res) => {
        res.status(200).send({
            'message':'Get all users',
            'data': userService.getUserData()
        })
    }
}