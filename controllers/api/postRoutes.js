const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      post: req.body.newPost,
      user_id: req.session.user_id,
    });
    res.status(200).json({ message: `Created new post` });
  } catch (err) {
    res.status(500).json({ message: `Failed to load, check postRoutes.js` });
  }
});

router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: Post,
                    attributes: ['username', 'comment'],
                }
            ]
        });
        const posts = postData((post) => post.get({ plain:true }));
        res.render('postPost', {posts, logged_in: req.session.logged_in});
    } catch (err) {
        res.status(500).json({ message: `Failed to load, check postRoutes.js` });
    }
});

module.exports = router;