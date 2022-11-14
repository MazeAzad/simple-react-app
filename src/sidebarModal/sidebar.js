import {FaTimes} from "react-icons/fa"
import logo from "./logo.svg";
import { social , links } from "./data";
import { useEffect } from "react";
import {useRef} from "react";

const Sidebar=({array})=>{
    const setSidebarActive=array[1];
    const sidebarActive=array[0];
   
    const sidebarRef=useRef(null);
      
  
    useEffect(()=>{
        if(sidebarActive)
        {
            sidebarRef.current.style.width="300px";
        }else{
            sidebarRef.current.style.width="0px";
        }
       
    },[sidebarActive])
    return (
        <div className="sidebarContainer" ref={sidebarRef}  >
            <div className="sidebarHeader">
                <img src={logo} alt="logo" className="logo" />
                <FaTimes className="timesIcon" onClick={()=>{setSidebarActive(!sidebarActive)}}/>
            </div>
            <div className="links">
                {links.map((link)=>{
                    return <div className="link" key={link.id}>
                        <a href={link.url}>
                            <div className="linkIcon">{link.icon}</div>
                            <p className="linkText">{link.text}</p>
                        </a>
                    </div>
                })}
            </div>
            <div className="socials"   >
                <div className="social">
                    {social.map((item)=>{
                        return <div className="socialItem" key={item.id}>
                            <a href={item.url}>{item.icon}</a>
                        </div>
                    })}
                </div>

            </div>

        </div>
    )
}
export default Sidebar;