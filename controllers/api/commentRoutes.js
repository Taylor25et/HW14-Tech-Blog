const router = require("express").Router();
const { Comment } = require("../models");
const withAuth = require("../utils/auth");

router.post("/", withAuth, async (req, res) => {
  if (!req.session.logged_in) {
    res.status(403).send();
    return;
  }
  try {
    await Comment.create({
      comment: req.body.newComment,
      user_id: req.session.user_id,
      post_id: req.body.postId,
    });
    res.status(200).json({ message: `Created new comment` });
  } catch (err) {
    res.status(500).json({ message: `Failed to load, check commentRoutes.js` });
  }
});

module.exports = router;
