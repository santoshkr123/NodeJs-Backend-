const mongodb = require("mongodb")
mongodb.MongoClient.connect("mongodb://localhost:27017")
.then((conn)=>{
   const db= conn.db("amazon")
   const products =db.collection("product")
   const newproduct = products.insertOne({
    "title": "New Jeans blue",
     "price":2500,
     "discount":25,
     "description":"New jeans are comimg"
   })

   newproduct().then(()=>{
    console.log("Data stored")
   })
   newproduct().catch(()=>{
    console.log("Data not stored")
   })



    

})
.catch(()=>{
    console.log("Unable to connect with Database")
})