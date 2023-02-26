// const jwt = require("jsonwebtoken");

// module.exports = (req, res, next) => {
//   try {
//     const accessToken = req.headers["authorization"];
//     const token = accessToken && accessToken.split(" ")[1];
//     if (!token) return res.status(401).send("Unauthorized user");
//     const decodeToken = jwt.verify(token, process.env.JWT_KEY);
//     req.body.id = decodeToken.id;
//     next();
//   } catch (err) {
//     res.status(401).send({
//       message: "didn't access",
//     });
//   }
// };

const jwt = require("jsonwebtoken")
const SECRET_KEY = "WALMARTAPI"

const auth = (req,res,next)=>{
    try {
        let token = req.headers.authorization;
        if(token){
            token.split(" ")[1];
            let user = jwt.verify(token,SECRET_KEY)
            req.userId = user.id
        }
        else{
            res.status(401).json({message:"Unauthorized User"})
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({message:"Unauthorized User"})
    }
}