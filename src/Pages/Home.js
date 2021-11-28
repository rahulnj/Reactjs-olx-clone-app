import React from "react";
import Banner from "../Components/Banner/Banner";

import Header from "../Components/Header/Header";
import Post from "../Components/Posts/Post";

function Home() {
    return (
        <div className="homeParentDiv">
            <Header />
            <Banner />
            <Post />
        </div>
    )
}

export default Home
