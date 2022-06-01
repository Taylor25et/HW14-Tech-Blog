const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

//from their profile page the user is able to create, update, and delete their posts

//create a user new post
router.post("/", withAuth, async (req, res) => {
    try {
      await Post.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id,
      });
      res.status(200).json({ message: "Your post has been created!" });
    } catch (err) {
      res.status(500).json({ message: "Failed to load, checkh 1profileRoutes.js" });
    }
});

//update user's post
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
      res.status(500).json({ message: "Failed to load, check 3profileRoutes.js" });
    }
});

//delete a user's post
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
      res.status(500).json({ message: "Failed to load, check 4profileRoutes.js" });
    }
});

module.exports = router;