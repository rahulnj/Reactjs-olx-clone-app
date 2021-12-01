import React, { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom"
import {
    getFirestore, collection, addDoc
} from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Logo from '../../image/olx-logo.png';
import './Login.css';
import { FirebaseContext } from '../../store/Context';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const firebase = useContext(FirebaseContext)
    const navigate = useNavigate()
    //initiliaze services
    const db = getFirestore()

    //collection ref

    const colRef = collection(db, 'users')

    const handleLogin = (e) => {
        e.preventDefault()
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate('/')
                // ...
            })
            .catch((error) => {
                alert(error.message)
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    return (
        <div>
            <div className="loginParentDiv">
                <img width="200px" height="200px" src={Logo}></img>
                <form onSubmit={handleLogin}>
                    <label htmlFor="fname">Email</label>
                    <br />
                    <input onChange={(e) => setEmail(e.target.value)}
                        className="input"
                        type="email"
                        id="fname"
                        name="email"
                    />
                    <br />
                    <label htmlFor="lname">Password</label>
                    <br />
                    <input onChange={(e) => setPassword(e.target.value)}
                        className="input"
                        type="password"
                        id="lname"
                        name="password"
                    />
                    <br />
                    <br />
                    <button>Login</button>
                </form>
                <Link className='link' to='/signup'>Signup</Link>
            </div>
        </div>
    );
}

export default Login;