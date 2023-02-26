const mongoose = require('mongoose')

const TechSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    price:{
        type : Number,
        required : true
    },
    image:{
        type : String,
    },
    description:{
        type : String,
        required : true
    }
})

const TechModel = new mongoose.model("Tech",TechSchema)

module.exports = TechModel



// //POST
// app.post("/api/tech",(req,res)=>{
//     const newTech = new TechModel({
//         ...req.body
//     })

//     newBrand.save()
//     res.send({message:"Tech added!",newTech})
// })

// //GET
// app.get("/api/tech",(req,res)=>{
//     TechModel.find(null,"name price image description").exec((error,data)=>{
//         if(error) return res.send(error)
//         res.send(data)
//     })
// })
