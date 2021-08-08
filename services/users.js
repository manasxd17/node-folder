const JWT = require('jsonwebtoken')
require('dotenv').config()
let users = [
    {
        'id':'1',
        'name' : 'admin',
        'email' : 'admin@gmail.com',
        'password': '1234',
        'mobile':'0123456789',
        'profilePicture':'xyz'
    },
    {
        'id':'2',
        'name' : 'admin2',
        'email' : 'admin2@gmail.com',
        'password': '12345',
        'mobile':'0123456789',
        'profilePicture':'xyz'
    },
    {
        'id':'3',
        'name' : 'admin3',
        'email' : 'admin3@gmail.com',
        'password': '123456',
        'mobile':'0123456789',
        'profilePicture':'xyz'
    }
]

const getUserData = () =>{
    return users
}

const getParticular = (id) => {
    const userInfo = users.filter(user => user.id == id);
    if(userInfo.length == 1) 
    return userInfo[0]
    return "No such data exist"
}

const updateUser = (id,data) => {
    const index = users.findIndex(user => user.id == id);
    if(index !== -1){
        for(key of Object.keys(data)){
            if(users[index][key]){
                users[index][key] = data[key]
            }
        }
        return "Updated user"
    }
    return "no user found"
}

const register = (data) => {
    const _id = users.length + 1
    data['id'] = _id
    users.push(data)
    return "Data inserted" 
}


const loginUser = (data) =>{
    const userInfo = users.filter(user => user.email == data['email']);
    if(userInfo.length == 1){
        if(userInfo[0]['password'] == data['password']){
            const token = JWT.sign(
                {
                    "id":userInfo[0]['id'],
                    "email": userInfo[0]['email']
                },
                process.env.jwt_secret
            )
            return {
                'status':200,
                "token":token,
                'message':'Successfully Logged in'
            }
        }
        return {
            'status':400,
            'message':'Invalid credentials'
        }
    }
    return {
        'status':404,
        'message':'User not found'
    }
}



module.exports = {
    getUserData,
    getParticular,
    updateUser,
    register,
    loginUser
}

