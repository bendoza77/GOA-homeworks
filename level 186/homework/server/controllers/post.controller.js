const fs = require("fs");

const getPosts = (req, res) => {

    const posts = JSON.parse(fs.readFileSync("posts.json", "utf-8"));

    return res.json({
        status: "succasse",
        data: { posts }
    })

}

const createPost = (req, res) => {

    const { title, description, userId } = req.body;
    const posts = JSON.parse(fs.readFileSync("posts.json", "utf-8"));

    if (!title || !description || userId === undefined) {
        return res.status(400).json({
            status: "fail",
            message: "All field is required"
        })
    }

    const newPost = {
        id: posts.length === 0 ? 1 : posts[posts.length - 1].id + 1,
        userId: userId,
        title: title,
        description: description
    }

    posts.push(newPost);

    fs.writeFileSync("posts.json", JSON.stringify(posts), "utf-8");

    return res.json({
        status: "succasse",
        message: "Post created succassefuly",
        data: { newPost }
    })

}

const deletePost = (req, res) => {

    const { id } = req.params;
    const { userId } = req.body;
    const posts = JSON.parse(fs.readFileSync("posts.json", "utf-8"));
    const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));
    const adminId = users[0].id;

    if (!id) {
        return res.status(400).json({
            status: "fail",
            message: "ID is invalid"
        })
    }

    const post = posts.find(el => el.id === id * 1);

    if (!post) {
        return res.status(404).json({
            status: "fail",
            message: "Post not found"
        })
    }

    if (userId !== adminId && userId !== post.userId) {
        return res.status(403).json({
            status: "fail",
            message: "You are not allowed to delete this post"
        })
    }

    fs.writeFileSync("posts.json", JSON.stringify(posts.filter(el => el.id !== id * 1)), "utf-8");

    return res.json({
        status: "succasse",
        data: { post }
    })

}

const getPostById = (req, res) => {

    const { id } = req.params;
    const posts = JSON.parse(fs.readFileSync("posts.json", "utf-8"));

    if (!id) {
        return res.status(400).json({
            status: "fail",
            message: "ID is invalid"
        })
    }

    const post = posts.find(el => el.id === id * 1);

    if (!post) {
        return res.status(404).json({
            status: "fail",
            message: "Post not found"
        })
    }

    return res.json({
        status: "succasse",
        data: { post }
    })

}

const updatePostById = (req, res) => {

    const { id } = req.params;
    const { title, description, author } = req.body;
    const posts = JSON.parse(fs.readFileSync("posts.json", "utf-8"));

    if (!id) {
        return res.status(400).json({
            status: "fail",
            message: "ID is invalid"
        })
    }

    const post = posts.find(el => el.id === id * 1);

    if (!post) {
        return res.status(404).json({
            status: "fail",
            message: "Post not found"
        })
    }

    if (title) post.title = title;
    if (description) post.description = description;
    if (author) post.author = author;

    fs.writeFileSync("posts.json", JSON.stringify(posts), "utf-8");

    return res.json({
        status: "succasse",
        message: "Post updated succassefuly",
        data: { post }
    })

}

const addComment = (req, res) => {

    const { id } = req.params;
    const { text } = req.body;
    const { userId } = req.body;
    const posts = JSON.parse(fs.readFileSync("posts.json", "utf-8"));

    if (!id) {
        return res.status(400).json({
            status: "fail",
            message: "ID is invalid"
        })
    }

    const post = posts.find(el => el.id === id * 1);

    if (!post) {
        return res.status(404).json({
            status: "fail",
            message: "Post not found"
        })
    }

    if (!text) {
        return res.status(400).json({
            status: "fail",
            message: "All field is required"
        })
    }

    if (!post.comments) post.comments = [];

    const newComment = {
        id: post.comments.length === 0 ? 1 : post.comments[post.comments.length - 1].id + 1,
        userId: userId,
        text: text
    }

    post.comments.push(newComment);

    fs.writeFileSync("posts.json", JSON.stringify(posts), "utf-8");

    return res.json({
        status: "succasse",
        message: "Comment added succassefuly",
        data: { newComment }
    })

}

const deleteComment = (req, res) => {

    const { id, commentId } = req.params;
    const { userId } = req.body;
    const posts = JSON.parse(fs.readFileSync("posts.json", "utf-8"));
    const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));
    const adminId = users[0].id;

    if (!id || !commentId) {
        return res.status(400).json({
            status: "fail",
            message: "ID is invalid"
        })
    }

    const post = posts.find(el => el.id === id * 1);

    if (!post) {
        return res.status(404).json({
            status: "fail",
            message: "Post not found"
        })
    }

    const comment = post.comments.find(el => el.id === commentId * 1);

    if (!comment) {
        return res.status(404).json({
            status: "fail",
            message: "Comment not found"
        })
    }

    if (userId !== adminId && userId !== comment.userId) {
        return res.status(403).json({
            status: "fail",
            message: "You are not allowed to delete this comment"
        })
    }

    post.comments = post.comments.filter(el => el.id !== commentId * 1);

    fs.writeFileSync("posts.json", JSON.stringify(posts), "utf-8");

    return res.json({
        status: "succasse",
        data: { comment }
    })

}

module.exports = {
    getPosts,
    createPost,
    deletePost,
    getPostById,
    updatePostById,
    addComment,
    deleteComment
}
