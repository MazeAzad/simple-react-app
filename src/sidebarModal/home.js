import Modal from "./modal";
import Sidebar from "./sidebar";
import {FaBars} from "react-icons/fa";
import { useState } from "react";
const Home=()=>{
    const [sidebarActive,setSidebarActive]=useState(false);
     return (
        <main className="mainContainer">
               <Bars array={[sidebarActive,setSidebarActive]}/>  
              <Sidebar array={[sidebarActive,setSidebarActive]}/>  
                <Modal/>
            
        </main>
        
    )
}

const Bars=({array})=>{
    const setSidebarActive=array[1];
    const sidebarActive=array[0];
    return (
         <div className="barsContainer" onClick={()=>setSidebarActive(!sidebarActive)}>
        <FaBars className="bars" />
        </div>
    )
}
export default Home;