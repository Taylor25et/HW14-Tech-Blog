const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const withAuth = require("../utils/auth");

//if logged out, from the homescreen a user can view existing posts, get a single post to view comments
//if logged in, the user can also view their proflie page with all of their posts

// getting all posts data for home screen view
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

//clicking into one specific post in order to view comments
router.get("/comment/:id", async (req, res) => {
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
    console.log(post)

    res.status(200).render("comment", {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//getting all the user's posts on their profile
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const postData = await Post.findAll( {
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
      where: {
        user_id: req.session.user_id
      }
    });
    
    const posts = postData.map((post) => post.get({ plain: true }));
    res
      .status(200)
      .render("profile", {
        posts,
        logged_in: req.session.logged_in,
        username: req.session.username,
      });
  } catch (err) {
    res.status(500).json({ message: "Failed to load, check 2profileRoutes.js" });
  }
});

// If the user is already logged in, redirect the request to another route
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
