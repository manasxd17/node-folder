const JWT = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()
let users = [
    {
        "id":"1",
        "name":"admin",
        "email":"admin@gmail.com",
        "password":"admin123",
        "profilePicture":"xyz.jpeg"
    }

]

const getUserData = () =>{
    return users
}

const getParticular = (id) => {
    const userInfo =  users.filter(user => user.id == id);
    if(userInfo.length == 1) 
    return userInfo[0]
    return "No such data exist"
}

const updateUser =  (id,data) => {
    const index =  users.findIndex(user => user.id == id);
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

const register = async (data) => {
    const _id = users.length + 1
    data['id'] = _id
    const password = data['password']
    const salt = await bcrypt.genSalt(Number(process.env.bcrypt_salt))
    const hashedPassword = await bcrypt.hash(password,salt)
    data['password'] = hashedPassword
    users.push(data)
    console.log(users);
    return "Data inserted" 
}


const loginUser =  async (data) =>{
    const userInfo =  await users.filter(user => user.email == data['email']);
    if(userInfo.length == 1){
        if(await bcrypt.compare(userInfo[0]['password'],data['password'])){
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

