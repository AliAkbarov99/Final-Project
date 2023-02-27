const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const UserRouter = require('./src/Routes/UserRoutes')
const TechRouter = require("./src/Routes/TechRoutes")
const PORT = 8080
app.use(cors())
app.use(express())
app.use(express.json())

mongoose.set("strictQuery", false)
mongoose.connect("mongodb+srv://nft-marketplace:bi3A8FulfZWxQuzI@cluster0.xtvensf.mongodb.net/?retryWrites=true&w=majority").then(() => console.log("Connected MongoDb")).catch(error => {
    if (error) return res.send(error)
})
app.use('/users', UserRouter)
app.use('/tech', TechRouter)
app.listen(PORT, () => {
    console.log("Connected on:", PORT);
})



//DELETE
// app.delete("/api/tech/:id",(req,res)=>{
//     BrandModel.findByIdAndDelete(req.params.id).exec((error,brand)=>{
//         if(error) return res.send(error)
//         res.send({message:"Brand deleted!",brand})
//     })
// })


