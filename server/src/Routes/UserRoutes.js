const express = require("express")
const {login,register} = require("../Controllers/UserController")
const UserRouter = express.Router();

UserRouter.post("/login", login)
UserRouter.post("/register",register)


module.exports = UserRouter;