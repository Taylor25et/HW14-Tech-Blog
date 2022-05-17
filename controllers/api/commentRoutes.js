const router = require("express").Router();
const { Comment } = require("../models");
const withAuth = require("../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      comment: req.body.newComment,
      user_id: req.session.user_id,
      post_id: req.body.postId,
    });
    res.status(200).json({ message: `Created new comment` });
  } catch (err) {
    res.status(500).json({ message: `Failed to load, check commentRoutes.js` });
  }
});

router.get('/', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include: [
                {
                    model: Commment,
                    attributes: ['username', 'comment'],
                }
            ]
        });
        const comments = commentData((comment) => comment.get({ plain:true }));
        res.render('commentPost', {comments, logged_in: req.session.logged_in});
    } catch (err) {
        res.status(500).json({ message: `Failed to load, check commentRoutes.js` });
    }
});

module.exports = router;
