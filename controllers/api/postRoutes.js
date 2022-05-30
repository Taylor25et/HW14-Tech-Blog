const router = require("express").Router();
const { Post, Comment, User } = require("../../models");
const withAuth = require("../../utils/auth");


router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          include: [{ model: User, attributes: ["username"] }],
        },
      ],
    });
    if (!postData) {
      res.status(404).json({ message: "This post could not be found..." });
      return;
    }
    const post = postData.get({ plain: true });
    res
      .status(200)
      .render("view", {
        post,
        logged_in: req.session.logged_in,
        username: req.session.username,
      });
  } catch (err) {
    res.status(500).json({ message: "Failed to load, check postRoutes.js" });
  }
});

module.exports = router;
