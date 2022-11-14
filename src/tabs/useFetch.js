import React , {useState , useEffect} from 'react';
export const useFetch=(url)=>{
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const getData= async()=>{
            const response= await fetch(url);
            const data= await response.json();
            setData(data);
            setLoading(false);
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
        getData();
    },[url])
 
    return {loading,data};
}