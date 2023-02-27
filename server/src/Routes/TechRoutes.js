const express = require("express")
const TechRouter = express.Router();
const {createProd} = require("../Controllers/TechController")


TechRouter.post("/createproduct", createProd)
// TechRouter.post("/addbasket",addBasket)

module.exports = TechRouter;

