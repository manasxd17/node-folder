const userService = require('../../../services/users')
module.exports = () => {
    return (req,res) => {
        const _id = req.params.id
        const data = req.body
        res.status(200).send({
            'data':userService.updateUser(_id, data)
        })
    }
}