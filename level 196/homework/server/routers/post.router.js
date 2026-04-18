const express = require("express");
const { getPosts, createPost, deletePost, getPostById, updatePostById, addComment, deleteComment } = require("../controllers/post.controller");

const postRouter = express.Router();

postRouter.route("/").get(getPosts).post(createPost);

postRouter.route('/:id').patch(updatePostById).delete(deletePost).get(getPostById);

postRouter.post("/:id/comments", addComment);

postRouter.delete("/:id/comments/:commentId", deleteComment);

module.exports = postRouter;
