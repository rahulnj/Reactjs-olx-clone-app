import React, { useState, useContext } from 'react';

import './Signup.css';
import Logo from '../../image/olx-logo.png';
import { FirebaseContext } from '../../store/FirebaseContext';
export default function Signup() {
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const firebase = useContext(FirebaseContext)

    const handleSignup = (e) => {
        e.preventDefault()

    }
    return (
        <div>
            <div className="signupParentDiv">
                <img width="200px" height="200px" src={Logo}></img>
                <form onSubmit={handleSignup}>
                    <label htmlFor="fname">Username</label>
                    <br />
                    <input onChange={(e) => setUserName(e.target.value)}
                        className="input"
                        type="text"
                        id="name"
                        name="name"
                    />
                    <br />
                    <label htmlFor="fname">Email</label>
                    <br />
                    <input onChange={(e) => setEmail(e.target.value)}
                        className="input"
                        type="email"
                        id="fname"
                        name="email"
                    />
                    <br />
                    <label htmlFor="lname">Phone</label>
                    <br />
                    <input onChange={(e) => setPhone(e.target.value)}
                        className="input"
                        type="number"
                        id="lname"
                        name="phone"
                    />
                    <br />
                    <label htmlFor="lname">Password</label>
                    <br />
                    <input onChange={(e) => setPassword(e.target.value)}
                        className="input"
                        type="password"
                        id="password"
                        name="password"
                    />
                    <br />
                    <br />
                    <button >Signup</button>
                </form>
                <a>Login</a>
            </div>
        </div>
    );
}