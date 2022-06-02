const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//if logged in, the user is able to leave comments on other people's posts

//add a comment to someone's post
router.post("/", withAuth, async (req, res) => {
  try {
    console.log(req.body)
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,  
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json({ message: "Failed to load, check commentRoutes.js" });
  }
});

module.exports = router;
