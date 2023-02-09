import { Avatar } from '@material-ui/core';
import React, {forwardRef }from 'react'
import './Posts.css';
import InputOptions from '../InputOption/InputOption.js'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';


const Post =forwardRef(({name, description ,message ,photoUrl},ref)=> {
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoUrl} >
                    {name[0]}
                </Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>

                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
        </div>
    )
})

export default Post
