const userService = require('../../../services/users')
module.exports = () => {
    return (req,res) => {
        const _id = req.params.id || req.user.id
        res.status(200).send({
            'data':userService.getParticular(_id)
        })
    }
}