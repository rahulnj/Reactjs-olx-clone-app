import React, { useState, useEffect, useContext } from 'react'
import Heart from '../../assets/Heart';
import { FirebaseContext } from '../../store/Context';
import './Post.css';
import { doc, getDocs, getFirestore, collection } from "firebase/firestore";


function Post() {
    const { firebase } = useContext(FirebaseContext)
    const [products, setProducts] = useState([])


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
    return (
        <div className="postParentDiv">
            <div className="moreView">
                <div className="heading">
                    <span>Quick Menu</span>
                    <span>View More</span>
                </div>
                <div className="cards">
                    {products.map(product => {

                        return <div className="card">
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
                    <div className="card">
                        <div className="favourite">
                            <Heart />
                        </div>
                        <div className="image">
                            <img src="../../../Images/R15V3.jpg" alt="" />
                        </div>
                        <div className="content">
                            <p className="rate">₹ 45000</p>
                            <span className="km">Two Wheeler</span>
                            <p className="name">YAMAHA R15V3</p>
                        </div>
                        <div className="date">
                            <span>Sun Nov 21 2021</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
