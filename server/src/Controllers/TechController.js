const TechModel = require("../Models/TechModel");
const UserModel = require("../Models/UserModel");



const createProd = async (req,res) =>{
    let newProd = new TechModel({
        ...req.body
    })
    try {
        await newProd.save();
        res.status(201).json({message:"Product created successufully!",newProd})
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }
}

// const addBasket = async (req,res) =>{
    
        
//     try {
//         await UserModel.findById(req.body.userId,function(user){
//             // $push:{
//             //     basket: {...req.body}
//             // }
//             const a = user.basket.find((prod)=>prod._id == req.body._id)
//             if(!a){
//                 UserModel.findByIdAndUpdate(req.body.userId,{
//                     $push:{
//                         basket:{
//                             ...req.body,
//                             count:1
//                         }
//                     }
//                 })
//             }
//             else{
//                 UserModel.findByIdAndUpdate(req.body.userId,function(user){
                    
//                     user.basket?.find(req.body._id,(error,data)=>{
//                         data.count++
//                     })
//                 })
//             }
            
//         })

//         res.status(201).json({message:"Product added!"})
//     } catch (error) {
//         res.status(500).json(error)
//     }
// }



module.exports = {createProd}