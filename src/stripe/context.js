import React, {useContext} from "react";
import { useState } from "react";
import sublinks from "./data";
const mainContext=React.createContext();

const MainProvider=({children})=>{
    const [isSidebarOpen,setIsSidebarOpen]=useState(false);
    const openSidebar=()=>{
        setIsSidebarOpen(true);
    }
    const closeSidebar=()=>{
        setIsSidebarOpen(false);
    }
    const [submenOpen,setSubmenuOpen]=useState(false);
    const [center,setCenter]=useState(0);
    const [page,setPage]=useState("");
    const [items,setItems]=useState([]);
    const openSubmenu=(e)=>{
        setSubmenuOpen(true);
        const element=e.target;
        const chosenPage=element.textContent;
        const left =element.getBoundingClientRect().left;
        const right=element.getBoundingClientRect().right;
        const centerOfElement=(left+right)/2;
        setCenter(centerOfElement);
        setPage(chosenPage);
        
        const obj = sublinks.find((link)=>{
            return link.page===chosenPage;
        })
        
         setItems(obj.links);
    }
    const closeSubmenu=()=>{
        setSubmenuOpen(false);
    }

    return (<mainContext.Provider value={
        {
            isSidebarOpen,
            openSidebar,
            closeSidebar,
            submenOpen,
            openSubmenu,
            center,
            page,
            items,
            closeSubmenu
        }
        }>
            {children}
            </mainContext.Provider>
    )
}

export {mainContext,MainProvider} ;