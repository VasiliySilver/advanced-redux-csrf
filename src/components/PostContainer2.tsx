// import React, {useEffect, useState} from 'react';
// import {postsAPI} from "../services/PostService";
// import PostItem from "./PostItem";
// import {IPost} from "../models/IPost";


const PostContainer = () => {
    // const {data: posts, error, isLoading} = postsAPI.useGetPostsQuery(100)
    // const [updatePost, {}] = postsAPI.useUpdatePostMutation()
    // const [deletePost, {}] = postsAPI.useDeletePostMutation()

    // const handleRemove = (post: IPost) => {
    //     deletePost(post)
    // }
    //
    // const handleUpdate = (post: IPost) => {
    //     updatePost(post)
    // }
    return (
        <div className="post__list">
            {/*{isLoading && <h1>Идет загрузка...</h1>}*/}
            {/*{error && <h1>Произошла ошибка при загрузке</h1>}*/}
            {/*{posts && posts.map(post =>*/}
            {/*    <PostItem post={post} remove={handleRemove} update={handleUpdate}/>*/}
            {/*)}*/}

        </div>
    );
};

export default PostContainer;