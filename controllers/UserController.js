const { User } = require("../models")

const CreateUser = async (req, res) => {
  console.log(req.body)
  try {
    const users = await User.create(req.body)
    console.log(users)
    await users.save()
    return res.status(201).json({ users })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  CreateUser,
}
