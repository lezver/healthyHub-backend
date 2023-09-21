https://healthy-hub.onrender.com/api/user/register
POST
example
{
"name": "user",
"email": "user@email.com",
"password": "123qwe",
"goal": "Lose Fat",
"gender": "Male",
"age": "30",
"height": "180",
"weight": "100",
"activity": "1.2"
}

//

https://healthy-hub.onrender.com/api/user/login
POST
example
{
"email": "user@email.com",
"password": "123qwe"
}

//

https://healthy-hub.onrender.com/api/user/logout
POST
example
Bearer Token :

//

https://healthy-hub.onrender.com/api/user/current
GET
example
Bearer Token :

//

https://healthy-hub.onrender.com/api/user/check-email
POST
example
{
"email": "user@email.com"
}

//

https://healthy-hub.onrender.com/api/user/change-goal
PATCH
example
{
"goal": "Lose Fat"
}

//

https://healthy-hub.onrender.com/api/user/change-settings
PATCH
example
{
"name": "user",
"gender": "Male",
"age": "30",
"height": "180",
"weight": "100",
"activity": "1.2"
}

//

https://healthy-hub.onrender.com/api/user/avatars
POST
example

Bearer Token :

//

https://healthy-hub.onrender.com/api/user/change-password
PATCH
example

{
"email": "user@email.com"
}
