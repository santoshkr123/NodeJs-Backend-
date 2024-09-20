const express = require("express")
const server = express()
server.listen(8080)

server.use(express.static('public'))

server.get('/',(req,res)=>{
    res.send("Home")
})
server.get('contact',(req,res)=>{
    res.send("Contact")
})

server.get("cart",(req,res)=>{
    res.send("Cart")
})

server.get('/menu',(req,res)=>{
   const data =  req.query
   res.json(data)
})