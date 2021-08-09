const userService = require('../../../services/users')
module.exports = () => {
    return (req,res) => {
        const data = req.body
        res.status(200).send({
            'data':userService.register(data)
        })
    }
}