const Router = require("express").Router()
const controller = require("../controllers/UserController")

Router.post("/", controller.createUser)

module.exports = Router
