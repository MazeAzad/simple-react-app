import { useState } from "react";
import { useEffect } from "react";
import React from "react";
export const useFetch=(url)=>{
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
            const getData=async()=>{
                try{
                    const response= await fetch(url);
                    const jsonResponse= await response.json();
                    setData(jsonResponse);
                    setLoading(false);
                }catch(error){
                    console.log(error);
                }

            }
        getData();
    },[url])
    return {data,loading};
}