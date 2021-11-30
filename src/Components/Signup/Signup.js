import React, { useState, useContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
    getFirestore, collection, addDoc
} from 'firebase/firestore'
import { Link, useNavigate } from "react-router-dom"
import './Signup.css';
import Logo from '../../image/olx-logo.png';
import { FirebaseContext } from '../../store/FirebaseContext';
export default function Signup() {
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const firebase = useContext(FirebaseContext)
    const navigate = useNavigate()
    //initiliaze services
    const db = getFirestore()

    //collection ref

    const colRef = collection(db, 'users')

    const handleSignup = (e) => {
        e.preventDefault()
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                // Signed in 
                const user = userCredential.user;
                // ...
                console.log("kerii");
                addDoc(colRef, {
                    id: userCredential.user.uid,
                    username: username,
                    phone: phone
                }).then(() => {
                    navigate('/signin')
                })
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
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