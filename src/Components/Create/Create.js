import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import { Link, useNavigate } from "react-router-dom"
import Header from '../Header/Header';
import { FirebaseContext, AuthContext } from '../../store/Context';
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Create = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    console.log(user);

    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState(null)
    const db = getFirestore()
    const colRef = collection(db, 'products')
    const storage = getStorage();
    let date = new Date()
    const handleSubmit = () => {
        const ImagesRef = ref(storage, `images/${image.name}`);
        uploadBytes(ImagesRef, image).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);

                console.log('Uploaded a blob or file!');
                console.log(snapshot);
                addDoc(colRef, {
                    name,
                    category,
                    price,
                    downloadURL,
                    userId: user.uid,
                    createdAt: date.toDateString()
                });
                navigate('/')
            })



        });


    }



    return (
        <Fragment>
            <Header />
            <card>
                <div className="centerDiv">

                    <label htmlFor="fname">Name</label>
                    <br />
                    <input onChange={(e) => setName(e.target.value)}
                        className="input"
                        type="text"
                        id="fname"
                        name="Name"
                    />
                    <br />
                    <label htmlFor="fname">Category</label>
                    <br />
                    <input onChange={(e) => setCategory(e.target.value)}
                        className="input"
                        type="text"
                        id="fname"
                        name="category"
                    />
                    <br />
                    <label htmlFor="fname">Price</label>
                    <br />
                    <input onChange={(e) => setPrice(e.target.value)}
                        className="input" type="number" id="fname" name="Price" />
                    <br />

                    <br />
                    <img alt="image" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>

                    <br />
                    <input onChange={(e) => {
                        setImage(e.target.files[0])
                    }}
                        type="file" />
                    <br />
                    <button onClick={handleSubmit} className="uploadBtn">Submit</button>

                </div>
            </card>
        </Fragment>
    );
};

export default Create;