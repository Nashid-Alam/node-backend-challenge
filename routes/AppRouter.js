const router = require("express").Router()
const userRouter = require("./UserRouter")
const postRouter = require("./PostRouter")

router.use("/users", userRouter)
router.use("/posts", postRouter)

module.exports = router
