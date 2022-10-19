const Router = require('express').Router();
const controller = require('../controllers/PostController');

Router.post('/', controller.createPost);
Router.get('/:post_id', controller.getPostById);
Router.put('/:post_id', controller.updatePost);

module.exports = Router;
