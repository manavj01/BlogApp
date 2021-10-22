const express = require('express');
const cors = require('cors');
const { createPost, getAllPosts, getPost, updatePost, deletePost } = require('../controller/post-controller');
const { uploadImage, getImage } = require('../controller/image-controller');
const upload = require('../utils/upload');
const { newComment, getComments, deleteComment } = require('../controller/comment-controller');


const router = express.Router();

router.post('/create', createPost);

router.get('/posts', getAllPosts);
router.get('/post/:id', getPost);

router.post('/update/:id', updatePost);
router.delete('/delete/:id', deletePost);

router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);

router.post('/comment/new', newComment);
router.get('/comments/:id', getComments);
router.delete('/comment/delete/:id', deleteComment)

module.exports = router;