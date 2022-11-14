import React ,{useState} from "react";
import Loading from './loading';
import TourList from "./tourList";
import{useFetch} from "./useFetch";
import "./index.css"
const Main=()=>
{   const url = 'https://course-api.com/react-tours-project';
    const {loading,data}=useFetch(url);
    return (
    <main>
        {loading ? <Loading/> :<TourList data={data}/>}
    </main>)

}


export default Main;