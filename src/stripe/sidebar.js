import   sublinks  from "./data";
import { FaTimes } from "react-icons/fa";
import { mainContext } from "./context";
import { useContext } from "react";
const Sidebar=()=>{
    const{closeSidebar,isSidebarOpen}=useContext(mainContext);
    return (
        <div className={`${isSidebarOpen ? "sidebarContainer showSidebar " :"sidebarContainer"}`}>
            <div className="sidebar">
                <button className="close-modal-btn" onClick={closeSidebar}>
                    <FaTimes />
                </button>
                {sublinks.map((link)=>{
                    const {page,links}=link;
                    return (<div className="linksContainer">
                        <h2 className="linksHeading">{page}</h2>
                        <div className="links">
                            {links.map((link)=>{
                                const {label,icon,url}=link;
                                return(<div className="link" key={Math.random()}>
                                            <a href={url}><span>{icon}</span><span>{label}</span></a>
                                       </div>
                                )
                            })}
                        </div>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Sidebar;