const express = require('express');
const { createPost, getAllPosts, getPost, updatePost, deletePost } = require('../controller/post-controller');

const router = express.Router();

router.post('/create', createPost);
router.get('/posts', getAllPosts);
router.get('/post/:id', getPost);
router.post('/update/:id', updatePost);
router.delete('/delete/:id', deletePost)

module.exports = router;