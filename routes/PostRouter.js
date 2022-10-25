const router = require("express").Router()
const controller = require("../controllers/PostController")

router.post("/", controller.createPost)
router.get("/:id", controller.getPostById)
router.put("/:id", controller.updatePost)

module.exports = router
