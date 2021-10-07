const express = require('express');

const { createPost, getAllPosts, getPost, updatePost, deletePost } = require('../controller/post-controller');
const { uploadImage, getImage } = require('../controller/image-controller');
const upload = require('../utils/upload');

const router = express.Router();

router.post('/create', createPost);

router.get('/posts', getAllPosts);
router.get('/post/:id', getPost);

router.post('/update/:id', updatePost);
router.delete('/delete/:id', deletePost);

router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);

module.exports = router;