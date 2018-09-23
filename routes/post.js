const express = require('express')
const router =express.Router()
const Post = require('../models/Post')
// Need to get all posts, make new post, delete post (by id) (GET, POST, DELETE)

// http:..localhost:5000/api/post (GET)
router.get('/', async (req, res) => {
    const posts = await Post.find({})
    res.status(200).json(posts)
});
// http:..localhost:5000/api/post (POST)
router.post('/', async (req, res) => {
    const postData = {
        title: req.body.title,
        text: req.body.title
    }
    const post = new Post(postData)
    await post.save()
    res.status(201).json(post)

});
// http:..localhost:5000/api/post/*id23* (DELETE)
router.delete('/:postId', async (req, res) => {
    Post.remove({_id: req.params.postId})
})
module.exports = router