const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["username", "img"],
        },
        {
          model: Comment
        }
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    res.status(200).render("home", {
      posts,
      logged_in: req.session.logged_in,
      username: req.session.username,
      img: req.session.img
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/view/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ]
    });

    const post = postData.get({ plain: true });

    res.status(200).render("singlePost", {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
