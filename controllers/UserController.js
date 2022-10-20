const { User } = require("../models")

const createUser = async (req, res) => {
  console.log(req.body)
  try {
    const user = await User.create(req.body)
    console.log(user)
    await user.save()
    return res.status(201).json({ user })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createUser,
}
