import React, {useEffect, useState} from 'react';
import {postsAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";


const PostContainer = () => {
    const [limit, setLimit] = useState(100)
    // const {data: posts, error, isLoading, refetch} = postsAPI.useGetPostsQuery(limit, {
    //     pollingInterval: 1000
    // })
    const {data: posts, error, isLoading, refetch} = postsAPI.useGetPostsQuery(limit)
    const [createPost, {}] = postsAPI.useCreatePostsMutation()

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLimit(3)
    //     }, 2000)
    // }, [])
    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    const [updatePost, {}] = postsAPI.useUpdatePostMutation()
    const [deletePost, {}] = postsAPI.useDeletePostMutation()

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <div className="post__list">
            <button onClick={handleCreate}>CREATE POST</button>
            <button onClick={() => refetch()}>REFETCH</button>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>Произошла ошибка при загрузке</h1>}
            {posts && posts.map(post =>
                <PostItem key={post.id} post={post} remove={handleRemove} update={handleUpdate}/>
            )}

        </div>
    );
};

export default PostContainer;