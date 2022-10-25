const router = require("express").Router()
const controller = require("../controllers/UserController")

router.post("/", controller.createUser)

module.exports = router
