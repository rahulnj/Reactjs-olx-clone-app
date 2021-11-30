import React, { useContext } from "react";

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from "../../store/Context";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function Header() {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    return (
        <div className="headerParentDiv">
            <div className="headerChildDiv">
                <div className="brand">
                    <OlxLogo />
                </div>
                <div className="placeSearch">
                    <Search />
                    <input type="text" />
                    <Arrow />
                </div>
                <div className="productSearch">
                    <div className="input">
                        <input type="text"
                            placeholder="Find car,mobile phone and more..." />
                    </div>
                    <div className="searchAction">
                        <Search color="#fff"></Search>
                    </div>
                </div>
                <div className="language">
                    <span>ENGLISH</span>
                    <Arrow />
                </div>
                <div className="loginPage">
                    <span>{user ? `Hi,${user.displayName}` : 'Login'}</span>
                    <hr />
                </div>
                {user && <span onClick={() => {
                    const auth = getAuth();
                    signOut(auth).then(() => {
                        navigate('/login')
                    }).catch((error) => {
                    });
                }}>Logout</span>}
                <div className="sellMenu">
                    <SellButton />
                    <div className="sellMenuContent">
                        <SellButtonPlus />
                        <span>SELL</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
