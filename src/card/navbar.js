import { useContext } from "react";
import {BsHandbag} from "react-icons/bs";
import { mainContext } from "./context";
const Navbar=()=>{
    const {loading,totalAmount}=useContext(mainContext);
    console.log(loading);
    return (
        <nav className={`${loading ? "navbar ": "navbar show-navbar"}`}>
            <div className="navbarTitle">
                useReducer
            </div>
            <div className="bagContainer">
                <BsHandbag className="bagIcon"/>
                <p className="itemCounter">{totalAmount}</p>
            </div>
        </nav>
    )
}
export default Navbar;