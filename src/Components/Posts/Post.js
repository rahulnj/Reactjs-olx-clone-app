import React from 'react'
import Heart from '../../assets/Heart';
import './Post.css';



function Post() {
    return (
        <div className="postParentDiv">
            <div className="moreView">
                <div className="heading">
                    <span>Quick Menu</span>
                    <span>View More</span>
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
