import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let postData = [
        {id: 1, message:'Hi, how are you', likesCount: 12},
        {id: 2, message:'It is my first post', likesCount: 15},
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} id={postData[0].id} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} id={postData[1].id} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    )
}
export default MyPosts;
