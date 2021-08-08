const userService = require('../../../services/users')
module.exports = () => {
    return (req,res) => {
        const data = req.body
        loginRes = userService.loginUser(data)
        token = loginRes['token'] || null
        res.status(loginRes['status']).send({
            "message": loginRes['message'],
            'token':token
        })
    }
}