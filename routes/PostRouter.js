const Router = require("express").Router()
const controller = require("../controllers/PostController")

Router.post("/", controller.createPost)
Router.get("/:id", controller.getPostById)
Router.put("/:id", controller.updatePost)

module.exports = Router
