const { User } = require("../models")
const middleware = require("../middleware")

const login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { name: req.body.name },
      raw: true,
    })
    if (
      user &&
      (await middleware.comparePassword(user.password, req.body.passwordSent))
    ) {
      let payload = {
        id: user.id,
        name: user.name,
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: "Error", msg: "Unauthorized" })
  } catch (error){ 
    throw error
  }
}

const signUp = async (req, res) => {
  try {
    const { email, passwordSent, name } = req.body
    let password = await middleware.hashPassword(passwordSent)
    const user = await User.create({ email, password, name })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const updatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    const user = await User.findByPk(req.params.user_id)
    if (
      user &&
      (await middleware.comparePassword(user.dataValues.password, oldPassword))
    ) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      await user.update({ passwordDigest })
      return res.send({ status: "Ok", payload: user })
    }
    res.status(401).send({ status: "Error", msg: "Unauthorized" })
  } catch (error) {}
}

const checkSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  login: login,
  signUp: signUp,
  updatePassword: updatePassword,
  checkSession: checkSession,
}
