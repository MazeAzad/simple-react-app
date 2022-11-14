import React ,{useState,useEffect} from "react";
 
import data from './data';
import Reviews from "./reviews";
import "./index.css";
const Main=()=>{

    return (
        <div>
             <Reviews data={data}/> 
         </div>
    )
}

export default Main;