import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import './Sidebar.css';


function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#
                { topic}
            </span>
            
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img
                    src="https://images.unsplash.com/photo-1491071676596-825e11fccef5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    alt="" />
                <Avatar src={user.photoUrl} className="sidebar__avatar" >{user.email[0] }</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{ user.email}</h4>
            </div>
            
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p id="blogName" >Blog</p>
                    <p className="sidebar__statNumber"><br></br></p>
                </div>
                <div className="sidebar__stat">
                    <p id="blogClick"><a href="https://www.nami.org/Blogs/NAMI-Blog/November-2021/What-to-Do-When-You-Love-Someone-with-Depression">Click Here</a></p>
                    <p className="sidebar__statNumber"><br></br></p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Reminder</p>
                {recentItem('Stay Strong')}
                {recentItem('Be kind to yourself')}
                {recentItem('Never give up')}
                {recentItem('Take action')}
                <br></br>
                <p>Supporting Videos</p>
                <h5><a href="https://www.youtube.com/watch?v=-GXfLY4-d8w" id="links">Click Here</a></h5><br></br>
                <h5><a href="https://www.youtube.com/watch?v=d96akWDnx0w" id="links">Click Here</a></h5><br></br>
                <h5><a href="https://www.youtube.com/watch?v=rdh1EXaeEx8" id="links">Click Here</a></h5>
                

                

            </div>
        </div>
    )
}

export default Sidebar
