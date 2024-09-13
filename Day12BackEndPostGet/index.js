const fs=require("fs")
const http = require("http") 
const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        "Access-Control-Allow-Origin" : "http://127.0.0.1:5000"
    })
    const method = req.body 
    if(method == 'POST')
    {
    let data =''
   req.on('data',(chunk)=>{
    data = data +chunk.toString()
    
   })
   req.on('end',()=>{
    const obj =JSON.parse(data)
    fs.writeFileSync('./stoarge/'+obj.filename,obj.content)
    res.write("success")
    res.end()
   })
}

else if(method =='GET')
{
   const file= fs.readdirSync('./storage')
   res.write(JSON.stringify(files))
   res.end()
   
}
    
})
server.listen(8080)