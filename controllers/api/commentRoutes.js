const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
   
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json({ message: "Failed to load, check commentRoutes.js" });
  }
});

// router.get("/", withAuth, async (req, res) => {
//   try {
//     const commentData = await Comment.findAll({
//       include: [
//         {
//           model: Comment,
//           attributes: ["username", "comment"],
//         },
//       ],
//       order: [["created_at", "DESC"]],
//     });
//     const comments = commentData((comment) => comment.get({ plain: true }));
//     res.render("commentPost", { comments, logged_in: req.session.logged_in });
//   } catch (err) {
//     res.status(500).json({ message: "Failed to load, check commentRoutes.js" });
//   }
// });

module.exports = router;
