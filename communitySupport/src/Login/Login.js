import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { auth } from '../firebase';
import { login } from '../features/userSlice';
import './Login.css';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const dispatch = useDispatch();
    const register = () => {
        if (!name) {
            return alert("Please enter a full name!!!");
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoUrl: profilePicture,
                }).then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profilePicture,
                    }))
                })
            }).catch(error => alert(error));

    };
    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoUrl: userAuth.user.photoUrl,
                })
                );
            }).catch(error => alert(error))
    };

    return (
        <div className="login" >
            <img src="logofinal.svg" alt="" id="logoo"/>
            <form>
                <input value={name} onChange={(e) =>setName(e.target.value)} placeholder="Full name" type="text" />
                <input value={profilePicture} onChange={(e) =>setProfilePicture(e.target.value)} placeholder="Enter your profile pic url" type="text" />
                <input value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email" type="email" />
                <input  value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" type="password" />
                <button type='submit' onClick={loginToApp} >Sign In</button>
                <p>
                 <span className="login__register" onClick={register} ><strong>Register Now</strong></span>
                </p>
            </form>
        </div>
    )
}

export default Login
