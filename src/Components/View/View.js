import React, { useEffect, useState, useContext } from 'react';

import { AuthContext } from '../../store/Context';
import { getDocs, query, where, getFirestore, collection } from "firebase/firestore";

import './View.css';
import { PostContext } from '../../store/PostContext';

function View() {
    const [userDetails, setUserDetails] = useState()
    const { user } = useContext(AuthContext)
    const { postDetails } = useContext(PostContext)


    const db = getFirestore()
    const [post, setPost] = useState()

    useEffect(() => {
        console.log("---------------------------", postDetails);
        if (postDetails) {

            setPost(postDetails)

        } else {


        }

    }, [postDetails])

    // useEffect(() => {
    //     if (post) {
    //         console.log("no load");
    //     } else {
    //         console.log("loader");
    //     }
    // }, [post])





    useEffect(async () => {
        if (user) {
            const colRef = collection(db, "users")
            const res = await query(colRef, where('id', '==', user.uid))
            const querySnapshot = await getDocs(res);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                setUserDetails(doc.data());
            });

        }
    }, [user])
    console.log(userDetails);
    return (
        <div className="viewParentDiv">
            <div className="imageShowDiv">
                <img
                    src={post ? post.downloadURL : ''}
                    alt=""
                />
            </div>
            <div className="rightSection">
                <div className="productDetails">
                    <p>₹ {post ? post.price : ''} </p>
                    <span>{post ? post.category : ''}</span>
                    <p>{post ? post.name : ''}</p>
                    <span>{post ? post.createdAt : ''}</span>
                </div>
                <div className="contactDetails">
                    <p>Seller details</p>
                    <p>{userDetails ? userDetails.username : ''}</p>
                    <p>{userDetails ? userDetails.phone : ''}</p>
                </div>
            </div>
        </div>
    );
}
export default View;