const userService = require('../../../services/users')
module.exports = () => {
    return async(req,res) => {
        const data = req.body
        loginRes = await userService.loginUser(data)
        token = loginRes['token'] || null
        console.log(loginRes['status'])
        res.status(loginRes['status']).send({
            "message": loginRes['message'],
            'token':token
        })
    }
}