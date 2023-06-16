const app = require("express");
const router = app.Router();
const { allPost, createPost, editPost, updatePost, deletePost, singlePost } = require("../controller/PostController");

router.get("/all-post/:page", allPost);
router.post("/create-post", createPost);
router.get("/edit-post/:id", editPost);
router.post("/update-post/:id", updatePost);
router.post("/delete-post/:id", deletePost);
router.get("/single-post/:id", singlePost);
// router.post("/create-comment/:id", createComment);
// router.get("/all-comment/:id", allComment);

module.exports = router;