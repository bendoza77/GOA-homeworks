import { createContext, useContext, useState } from "react";

const PostContext = createContext();

const usePost = () => useContext(PostContext);

const API = "http://localhost:3000/api"

const PostProvider = ({children}) => {

    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {

            const req = await fetch(`${API}/posts`);

            const res = await req.json();

            setPosts(res.data.posts);

        } catch(err) {
            console.log(err);
        }
    }

    const createPost = async (postObj) => {

        try {

            const req = await fetch(`${API}/posts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(postObj)
            })

            const res = await req.json();

            if (!req.ok) {
                throw new Error("Can't create post");
            }

            setPosts(prev => {
                return [...prev, res.data.newPost];
            })

        } catch(err) {
            console.log(err);
        }

    }

    const deletePost = async (postId, userId) => {

        try {

            const req = await fetch(`${API}/posts/${postId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userId })
            })

            const res = await req.json();

            if (!req.ok) {
                throw new Error("Can't delete post");
            }

            setPosts(posts.filter(el => el.id !== postId * 1));

        } catch(err) {
            console.log(err);
        }

    }

    const addComment = async (postId, commentObj) => {

        try {

            const req = await fetch(`${API}/posts/${postId}/comments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(commentObj)
            })

            const res = await req.json();

            if (!req.ok) {
                throw new Error("Can't add comment");
            }

            setPosts(posts.map(el => {
                if (el.id !== postId * 1) return el;
                return { ...el, comments: [...(el.comments || []), res.data.newComment] }
            }))

        } catch(err) {
            console.log(err);
        }

    }

    const clearPosts = () => {
        setPosts([]);
    }

    const deleteComment = async (postId, commentId, userId) => {

        try {

            const req = await fetch(`${API}/posts/${postId}/comments/${commentId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userId })
            })

            const res = await req.json();

            if (!req.ok) {
                throw new Error("Can't delete comment");
            }

            setPosts(posts.map(el => {
                if (el.id !== postId * 1) return el;
                return { ...el, comments: el.comments.filter(c => c.id !== commentId * 1) }
            }))

        } catch(err) {
            console.log(err);
        }

    }



    return (
        <>
            <PostContext.Provider value={{posts, getPosts, createPost, deletePost, addComment, deleteComment, clearPosts}}>
                {children}
            </PostContext.Provider>
        </>
    );


}

export { usePost, PostProvider }
