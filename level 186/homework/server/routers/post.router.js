const express = require("express");
const { getPosts, createPost, deletePost, getPostById, updatePostById, addComment, deleteComment } = require("../controllers/post.controller");

const postRouter = express.Router();

postRouter.get("/", getPosts);

postRouter.post("/", createPost);

postRouter.get("/:id", getPostById);

postRouter.patch("/:id", updatePostById);

postRouter.delete("/:id", deletePost);

postRouter.post("/:id/comments", addComment);

postRouter.delete("/:id/comments/:commentId", deleteComment);

module.exports = postRouter;
