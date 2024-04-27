const express = require('express')
const app = express()
let users= []
require('dotenv').config()
//npm i cors
//app.use(cors())
app.use(express.json())
//get,post,delete
//body parser
app.get('/',(req,res)=>{
    res.send(users)
})
    .post('/',(req,res)=>{
    const data = req.body
    users= [...users,data]
    res.send('user created')
})
    .delete('/:name',(req,res)=>{
    const params = req.params.name
    let deleteUser = users.filter(val => val .
    nama!==params)
    users = deleteUser
    res.send(users)
})
    .put('/',(req,res)=>{
    const data = req.body
    users.map(val =>{
        if(val.prodi==data.prodi) val.nama= data.
        nama
    })
    res.send(users)
})

app.listen(process.env.PORT,()=>{
    console.log('Server sedang dijalankan di port '+ process.
    env.PORT)
})