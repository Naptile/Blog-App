const express = require("express");
const router = express.Router();
const {
    getPosts,
    createPost,
    updatePost,
    deletePost,
    getPostById
} = require("../controllers/postControllers");
router.get("/", getPosts);
router.post("/", createPost);
router.get("/:id", getPostById);
router.put("/:id",updatePost);
router.delete("/:id",deletePost);

module.exports = router;