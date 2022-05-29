const router = require("express").Router();
const userRoutes = require("./userRoutes.js");
const postRoutes = require("./postRoutes.js");
const commentRoutes = require("./commentRoutes.js");
const profileRoutes = require("./profileRoutes.js");


router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/view", commentRoutes);
router.use("/profile", profileRoutes);

module.exports = router;
