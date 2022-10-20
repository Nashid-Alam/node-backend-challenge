const { Post } = require("../models")

const createPost = async (req, res) => {
  console.log(req.body)
  try {
    const post = await Post.create(req.body)
    console.log(post)
    await post.save()
    return res.status(201).json({ post })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getPostById = async (req, res) => {
  try {
    const postId = parseInt(req.params.id)
    const post = await Post.findByPk(postId)
    return res.status(200).json({ post })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updatePost = async (req, res) => {
  try {
    const postId = parseInt(req.params.id)
    const updatedPost = await Post.update(req.body, {
      where: { id: postId },
      returning: true,
    })
    res.send(updatedPost)
  } catch (error) {
    throw error
  }
}

module.exports = {
  createPost,
  getPostById,
  updatePost,
}
