import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://static3.bigstockphoto.com/2/1/2/large1500/212200732.jpg" alt=""/>
            {props.message}
            <div>
            <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;