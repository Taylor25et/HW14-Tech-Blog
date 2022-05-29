const router = require("express").Router();
const { Comment, Post, User } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
    try {
      await Post.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id,
      });
      res.status(200).json({ message: "Your post has been created!" });
    } catch (err) {
      res.status(500).json({ message: "Failed to load, check postRoutes.js" });
    }
});

//
router.get("/", withAuth, async (req, res) => {
    try {
      const postData = await Post.findAll( {
        where: {
          user_id: req.session.user_id
        },
        order: [
            ['created_at', 'DESC']
        ],
        
        
        // include: [
        //   {
        //     model: User,
        //     attributes: ["username"],
        //   },
        //   {
        //     model: Comment,
        //     include: [{ model: User, attributes: ["username"] }],
        //   },
        // ],  
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
      res.status(500).json({ message: "Failed to load, check profileRoutes.js" });
    }
});

router.put("/:id", withAuth, async (req, res) => {
    try {
      const postData = await Post.update( 
          {
            content: req.body.content
          },
          {
            where: {
                id: req.params.id
            }
          }
      );
      if (!postData[0]) {
        res.status(404).json({ message: "This post could not be found..." });
        return;
      } res.status(200).json({ message: "Your post has been updated" });
    } catch (err) {
      res.status(500).json({ message: "Failed to load, check postRoutes.js" });
    }
});

router.delete("/:id", withAuth, async (req, res) => {
    try {
      const postData = await Post.destroy( 
          {
            where: {
                id: req.params.id
            }
          }
      );
      if (!postData[0]) {
        res.status(404).json({ message: "This post could not be found..." });
        return;
      } res.status(200).json({ message: "Your post was deleted" });
    } catch (err) {
      res.status(500).json({ message: "Failed to load, check postRoutes.js" });
    }
});

module.exports = router;