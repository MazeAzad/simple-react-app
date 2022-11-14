import logo from "./images/logo.svg";
import {FaBars}  from 'react-icons/fa';
import { mainContext } from "./context";
import { useContext } from "react";
const Navbar=()=>{
    const {openSidebar,openSubmenu}=useContext(mainContext);
    return (
        <nav className="navbar">
            <div className="logoContainer">
                <img src={logo} alt="logo" />
            </div>
            <div className="navbarListContainer">
                <ul className="navbarList">
                    <li className="navberlistItem" onMouseOver={openSubmenu}>Products</li>
                    <li className="navberlistItem" onMouseOver={openSubmenu}>Developers</li>
                    <li className="navberlistItem" onMouseOver={openSubmenu}>Company</li>
                </ul>
            </div>
            <button className="signInBtn">sign in</button>
            <button className="sidebarToggleBtn" onClick={openSidebar}>
                <FaBars/>
            </button>
        </nav>
    )
}

export default Navbar;