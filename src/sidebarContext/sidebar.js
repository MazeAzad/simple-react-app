import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import {socials,links} from "./data";
import { mainContext } from "./contex";
import { useContext } from "react";
const Sidebar=()=>{
   const {isSidebarOpen,closeSidebar}=useContext(mainContext);
    return(
        <aside className={`${isSidebarOpen? "sidebar show-sidebar" : "sidebar"}`} >
            <div className="sidebar-header">
                <img src={logo} alt="coding-addict" />
                <button className="close-btn" onClick={closeSidebar}>
                    <FaTimes/>
                </button>
            </div>
            <div className="links">
                {links.map((link)=>{
                     const{id,icon,url,text}=link;
                    return (
                        <div className="link" key={id}>
                            <a href={url}>
                                {icon}
                                {text}
                            </a>
                        </div>
                    )
                })}
            </div>
            <div className="socials">
                {socials.map((social)=>{
                    const {id,url,icon}=social;
                    return(
                        <a href={url} key={id}>{icon}</a>
                    )
                })}
            </div>
        </aside>
    )
}
export default Sidebar;