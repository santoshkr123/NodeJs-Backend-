const fs = require("fs")
const express = require("express")
const app = express()
app.listen(8080)

app.post('/product',(req,res)=>{
    fs.writeFileSync("Orcale.txt","sql")
    res.send("File created")
})

app.get('/product',(req,res)=>{
   const readfile =  fs.readFileSync("Oracle.txt")
   res.send(readfile)
})

app.put('/product',(req,res)=>{
  const appnedfile = fs.appendFileSync("Oracle.txt","MySQL")
  res.send(appnedfile)

})

app.delete('/product',(req,res)=>{
    const deletethefile = fs.unlinkSync("Oracle.txt")
    res.send(deletethefile)
})
