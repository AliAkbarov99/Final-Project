const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    surname:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    },
    basket:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Tech"
        }
    ]
})

const UserModel = new mongoose.model("User",UserSchema)

module.exports = UserModel