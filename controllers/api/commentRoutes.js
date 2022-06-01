const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//if logged in, the user is able to leave comments on other people's posts

//add a comment to someone's post
router.post("/", withAuth, async (req, res) => {
  try {
    await Comment.create({
      comment: req.body.newComment,
      user_id: req.session.user_id,
      user_img: req.body.user_img,
      post_id: req.body.postId
   
    });
    res.status(200).json({ message: "Created new comment" });
  } catch (err) {
    res.status(500).json({ message: "Failed to load, check commentRoutes.js" });
  }
});

module.exports = router;
