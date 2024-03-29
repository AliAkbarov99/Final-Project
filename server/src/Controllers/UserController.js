const UserModel = require("../Models/UserModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const SECRET_KEY = "WALMARTAPI"

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await UserModel.findOne({ email: email });
        if (!existingUser) {
            return res.status(400).json({ message: "User not found!" })
        }
        const matchPassword = await bcrypt.compare(password, existingUser.password)
        if (!matchPassword) {
            return res.status(400).json({ message: "Invalid Credentials!" })
        }
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, SECRET_KEY,{ expiresIn: "1d" });
        res.status(201).json({ message: "Login successfully!", user: existingUser, token: token })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" })
    }
}


const register = async (req, res) => {

    const { name, surname, email, password } = req.body;
    try {
        const existingUser = await UserModel.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists!" })
        }
        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await UserModel({
            name: name,
            surname: surname,
            email: email,
            password: hashedPassword
        })

        const token = jwt.sign({ email: newUser.email, id: newUser._id }, SECRET_KEY, { expiresIn: "1d" });
        await newUser.save()
        res.status(200).json({ user: newUser, token: token })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" ,error})
    }
}

// const getUsers = async (req,res) => {
//     UserModel.find(null,"name surname email").exec((error,data)=>{
//         if(error) return res.send(error)
//         res.send(201).json({message:"Successfully!",data})
//     })
// }

module.exports = { login, register }  