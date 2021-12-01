import React, { useState, useEffect, useContext } from 'react'
import Heart from '../../assets/Heart';
import { FirebaseContext } from '../../store/Context';
import './Post.css';
import { doc, getDocs, getFirestore, collection } from "firebase/firestore";
import { PostContext } from '../../store/PostContext';
import { Link, useNavigate } from "react-router-dom"


function Post() {
    const navigate = useNavigate()
    const { firebase } = useContext(FirebaseContext)
    const [products, setProducts] = useState([])

    const { setPostDetails } = useContext(PostContext)

    useEffect(() => {
        const db = getFirestore()
        const colRef = collection(db, "products")
        getDocs(colRef).then((snapshot) => {
            const allPost = snapshot.docs.map((product) => {

                return {
                    ...product.data(),
                    id: product.id
                }
            })
            setProducts(allPost)

        })

    }, [])
    console.log(products);
    return (
        <div className="postParentDiv">
            <div className="moreView">
                <div className="heading">
                    <span>Quick Menu</span>
                    <span>View More</span>
                </div>
                <div className="cards">
                    {products.map(product => {

                        return <div className="card" onClick={() => {
                            setPostDetails(product)
                            navigate('/view')
                        }}>
                            <div className="favourite">
                                <Heart />
                            </div>
                            <div className="image">
                                <img src={product.downloadURL} alt="" />
                            </div>
                            <div className="content">
                                <p className="rate">₹ {product.price}</p>
                                <span className="km">{product.category}</span>
                                <p className="name">{product.name}</p>
                            </div>
                            <div className="date">
                                <span>{product.createdAt}</span>
                            </div>
                        </div>
                    })
                    }

                </div>
            </div>
            <div className="recommends">
                <div className="heading">
                    <span>Fresh Recommendations</span>
                </div>
                <div className="cards">
                    {products.map(product => {

                        return <div className="card" onClick={() => {
                            setPostDetails(product)
                            navigate('/view')
                        }}>
                            <div className="favourite">
                                <Heart />
                            </div>
                            <div className="image">
                                <img src={product.downloadURL} alt="" />
                            </div>
                            <div className="content">
                                <p className="rate">₹ {product.price}</p>
                                <span className="km">{product.category}</span>
                                <p className="name">{product.name}</p>
                            </div>
                            <div className="date">
                                <span>{product.createdAt}</span>
                            </div>
                        </div>
                    })
                    }

                </div>
            </div>
        </div>
    )
}

export default Post
