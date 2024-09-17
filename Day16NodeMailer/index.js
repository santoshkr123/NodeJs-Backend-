const http = require("http") 
const nodemailer = require("nodemailer")

nodemailer.createTransport({
    service :'gmail' ,
    auth : {
        user : '',
        pass : ''
    }
})
const ui =`
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
</head>
<body>
    
</body>
</html>
`
const server = http.createServer((req,res)=>{
    const options = {
        from : '',
        to: '',
        subject : '',
        text : ''
    }
    config.sendMail(options)
    .then((res)=>{
        res.write("Mail sent")
        res.end()
    })
    .catch((err)=>{
        res.write("failed to sent")
        res.end()
    })
})
server.listen(8080)