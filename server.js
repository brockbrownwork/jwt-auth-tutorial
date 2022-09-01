const express = require("express")
const jwt = require("jsonwebtoken")
const app = express()

app.use(express.json())

const posts = [
    {
        username: 'Kyle',
        title: 'Post 1'
    },
    {
        username: 'Jim',
        title: 'Post 2'
    }
]

app.get('/posts', (req, res) => {
    res.json(posts)
})

app.post('login', (req, res) => {
    // Authenticate user
    const username = req.body.username
    const user = {name: username}
    jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)

})

app.listen(3000)

console.log("helloo")