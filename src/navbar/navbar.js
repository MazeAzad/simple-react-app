import React ,{useState, useRef ,useEffect} from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, socials } from "./data";
import logo from './logo.svg';
const Navbar =()=>{
    const[bars,setBars]=useState(false);
    const linksRef=useRef(null);
    const linksContainerRef=useRef(null);
    useEffect(()=>{
        const linksHeight=linksRef.current.getBoundingClientRect().height;
        if(bars)
        {
            linksContainerRef.current.style.height=`${linksHeight}px`;
                               
        }else{
            linksContainerRef.current.style.height="0";
        }
    },[bars])
    return(
        <nav>
            <div className="navHeader">
                <div className="logoContainer">
                    <img src={logo} alt="logo"/> 
                </div>
                <div className="barsContainer">
                    <FaBars className={bars ? " bars barsEffect ":" bars"} onClick={()=>setBars(!bars)}/>
                </div>
            </div>
            <div className="linksContainer" ref={linksContainerRef} >
                <div className="links" ref={linksRef}>
                    {links.map((link)=>{
                        return (<div className="link">
                            <a href={link.url}>{link.text}</a>
                        </div>)
                    })}
                </div>
            </div>
            <div className="socialContainer">
            
                    {
                        socials.map((social)=>{
                            return (<div className="social" key={social.id}>
                                <a href={social.url}>{social.icon}</a>
                            </div>)
                        })
                    }
                
            </div>
        </nav>
    )
}

export default Navbar;