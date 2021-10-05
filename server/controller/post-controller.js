const Post = require('../schema/post-schema')

const createPost = async (request, response) => {
  try {
    const post = await Post.create(request.body);
    response.status(200).json(post)
  } catch (error) {
    response.status(500).json(error);
  }

}

const getAllPosts = async (request, response) => {
  let username = request.query.username;
  let category = request.query.category;
  let posts;
  try {
    if (username)
      posts = await Post.find({ username: username });
    else if (category)
      posts = await Post.find({ categories: category });
    else
      posts = await Post.find({});
    response.status(200).json(posts);
  } catch (error) {
    response.status(500).json(error)
  }

}

const getPost = async (request, response) => {

  try {
    let post = await Post.findById(request.params.id);
    response.status(200).json(post);
  } catch (error) {
    response.status(500).json(error)
  }
}

const updatePost = async (request, response) => {
  try {
    await Post.findByIdAndUpdate(request.params.id, { $set: request.body })
    response.status(200).response('Blog updated successfully')
  } catch (error) {
    response.status(500).json(error);
  }
}

const deletePost = async (request, response) => {
  try {
    let post = await Post.findById(request.params.id)
    await post.delete();
    response.status(200).response('Blog deleted successfully')
  } catch (error) {
    response.status(500).json(error);
  }
}



module.exports = {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost
}