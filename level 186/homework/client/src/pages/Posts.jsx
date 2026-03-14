import { useEffect } from "react";
import { usePost } from "../context/PostContext";
import { useAuth } from "../context/AuthContext";

const Posts = () => {

    const { posts, getPosts, createPost, deletePost, addComment, deleteComment } = usePost();
    const { user } = useAuth();

    useEffect(() => {
        getPosts()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        const postObj = {
            title: e.target.postTitle.value,
            description: e.target.postDescription.value,
            author: e.target.postAuthor.value,
            userId: user.id
        }

        createPost(postObj);
        e.target.reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="postTitle" placeholder="Enter Post Title" required/>
                <input type="text" name="postDescription" placeholder="Enter Post Description" required/>
                <input type="text" name="postAuthor" placeholder="Enter Post Author" required/>
                <button>Create Post</button>
            </form>
            {user.length !== 0 && posts.map(el => {
                return (
                    <div key={`Post ${el.id}`}>
                        <p>title: {el.title}</p>
                        <p>description: {el.description}</p>
                        <p>author: {el.author}</p>
                        {(user.id === 0 || user.id === el.userId) && <button onClick={() => deletePost(el.id, user.id)}>delete post</button>}

                        <div>
                            <h4>Comments</h4>
                            {(el.comments || []).map(c => {
                                return (
                                    <div key={`Comment ${c.id}`}>
                                        <p>{c.text}</p>
                                        {(user.id === 0 || user.id === c.userId) && <button onClick={() => deleteComment(el.id, c.id, user.id)}>delete comment</button>}
                                    </div>
                                )
                            })}
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                addComment(el.id, { text: e.target.commentText.value, userId: user.id });
                                e.target.reset();
                            }}>
                                <input type="text" name="commentText" placeholder="Enter Comment" required/>
                                <button>Add Comment</button>
                            </form>
                        </div>
                    </div>
                )
            })}
        </>
    );


}

export default Posts
