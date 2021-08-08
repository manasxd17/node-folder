const jwt = require('jsonwebtoken')
require('dotenv').config()
const userService = require('../services/users')

const verify_token = (req, res, next) => {
    const token = req.headers['authorization']
    if(!token){
        return res.status(403).send({'message':'Token is required.'})
    }
    try{
        jwtToken = token.split(' ')[1];
        const decoded = jwt.verify(jwtToken, process.env.jwt_secret);
        userData = userService.getUserData(decoded['id'])
        if(userData.length == 0){
            return res.status(400).send({'message':'Unauthenticated'})
        }
    }
    catch(err){
        return res.status(401).send({'message':'Invalid token'})
    }
    return next()
}

module.exports = verify_token;