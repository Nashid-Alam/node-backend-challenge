const { Post} = require('../models');

const createPost = async (req, res) => {
  console.log(req.body);
  try {
    const posts = await Post.create(req.body);
    console.log(posts);
    await posts.save();
    return res.status(201).json({ posts });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getPostById = async (req, res) => {
  try {
    let postId = parseInt(req.params.id);
    const posts = await Post.findByPk(id);
    return res.status(200).json({ posts });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const updatePost = async (req, res) => {
  try {
    let postId = parseInt(req.params.crime_id);
    let updatedPost = await Post.update(req.body, {
      where: { id: id},
      returning: true
    });
    res.send(updatedPost);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createPost,
  getPostById,
  updatePost,
};

