import React from "react";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";

import Header from "../Components/Header/Header";
import Post from "../Components/Posts/Post";

function Home() {
    return (
        <div className="homeParentDiv">
            <Header />
            <Banner />
            <Post />
            <Footer />
        </div>
    )
}

export default Home
