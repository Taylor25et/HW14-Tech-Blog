const router = require("express").Router();
const userRoutes = require("./userRoutes.js");
const commentRoutes = require("./commentRoutes.js");
const profileRoutes = require("./profileRoutes.js");


router.use("/users", userRoutes);
router.use("/comment", commentRoutes);
router.use("/profile", profileRoutes);

module.exports = router;
