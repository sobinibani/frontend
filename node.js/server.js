const express = require('express');
const app = express();

const PORT = 4000;

const users = [
    {
        id: 0,
        name: 'Jack'
    },
    {
        id: 1,
        name: 'Jennifer'
    }
]

app.get('/',(req,res)=>{
    res.send('Hello, World')
})

app.get('/users/:idUser',(req,res)=>{
    const userId = Number(req.params.idUser);
    const user = users[userId];
    if(user){
        res.json(user)
    } else {
        res.sendStatus(404)
    }
})

app.listen(PORT, ()=>{
    console.log(`Running on port ${PORT}`)
})