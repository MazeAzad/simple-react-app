import { mainContext } from "./context";
import { useContext ,useRef} from "react";
import { useEffect } from "react";
import  sublinks  from "./data";
import { useState } from "react";
const Submenu=()=>{
    const {submenOpen,center,page,items} =useContext(mainContext);
    const submenuRef=useRef(null);
    useEffect(()=>{
        const element=submenuRef.current;
        element.style.left=`${center-180}px`;
    },[center])

    
   
    return (

            <div className={`${submenOpen ? "submenu show-submenu" :"submenu"}`} ref={submenuRef}>
                <div className="submenuHeading">
                    <h2>{page}</h2>
                </div>
                <div className="submenuItems">
                {
                    items.map((item)=>{
                        const {label,icon,url} =item;
                        return<div className="submenuIetm" key={Math.random()}>
                              <a href={url}>{icon}{label}</a>
                        </div>
                    })
                }            


                </div>
            </div>
     
    )
}
export default Submenu;