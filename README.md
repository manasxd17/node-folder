# APIs

## POST- /register
```javascript
Request
{
    "name":"Manas",
    "email":"manass@gmail.com",
    "password":"manas123",
    "mobile_no":"1234567890",
    "profilePicture":"xyz.jpeg"
}

Response
{
    name: 'Manas',
    email: 'manass@gmail.com',
    password: '$2b$15$0gqXdUzHmaiOIx9LZqkPZO/h44di/zPcMBfapo2Bw0YK8dwySilBm',
    mobile_no: '1234567890',
    profilePicture: 'xyz.jpeg',
    id: 1
}

```

## POST- /login

```javascript
Request
{
    "email":"manass@gmail.com",
    "password":"manas123"
}

Response
{
    "message": "Successfully Logged in",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtYW5hc3NAZ21haWwuY29tIiwiaWF0IjoxNjI4NTM0NDk1fQ.Pr9K8XDvN76gLXBY6u5d0j6oDcBzIl5XgEawKxT3wGs"
}

```

## GET- /user/all
```javascript
pass token
Authorization type = Bearer Token

Response
{
    "message": "Get all users",
    "data": [
        {
            "name": "Manas",
            "email": "manass@gmail.com",
            "password": "$2b$15$0gqXdUzHmaiOIx9LZqkPZO/h44di/zPcMBfapo2Bw0YK8dwySilBm",
            "mobile_no": "1234567890",
            "profilePicture": "xyz.jpeg",
            "id": 1
        }
    ]
}
```

## GET- /user
```javascript
(self)
pass token
Authorization type = Bearer Token

Response
"data": {
        "name": "Manas",
        "email": "manass@gmail.com",
        "password": "$2b$15$0gqXdUzHmaiOIx9LZqkPZO/h44di/zPcMBfapo2Bw0YK8dwySilBm",
        "mobile_no": "1234567890",
        "profilePicture": "xyz.jpeg",
        "id": 1
    }
```

## GET- /user/id
```javascript
(self)
pass token
Authorization type = Bearer Token

Response
"data": {
        "name": "Manas",
        "email": "manass@gmail.com",
        "password": "$2b$15$0gqXdUzHmaiOIx9LZqkPZO/h44di/zPcMBfapo2Bw0YK8dwySilBm",
        "mobile_no": "1234567890",
        "profilePicture": "xyz.jpeg",
        "id": 1
    }
```

## PUT- /user/id
```javascript
http://127.0.0.1:8888/user/1
pass token
Authorization type = Bearer Token
Request

{
    "name": "Manas",
    "email": "manass@gmail.com",
    "password": "manas678",
    "mobile_no": "1234567890",
    "profilePicture": "xyz.jpeg"
}

Response
{
    "data": "Updated user"
}

```

## License
[MIT](https://choosealicense.com/licenses/mit/)
 
