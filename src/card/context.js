
import React from "react";
import { useReducer } from "react";
import reducer from "./reducer";
import { useEffect } from "react";
const mainContext=React.createContext();


const MainProvider=({children})=>{
    const url = 'https://course-api.com/react-useReducer-cart-project';
    let initialState={
        items:[],
        totalPrice:0,
        totalAmount:0,
        loading:true,
    }
    const [state,dispatch]=useReducer(reducer,initialState);
    const fectchData=async()=>{
        const response= await fetch(url);
        const data=await response.json();
        dispatch({type:"LOADING_DATA",payload:data});
    }
    useEffect(()=>{
        fectchData();
    },[url])
    const increase=(id)=>{
        dispatch({type:"INCREASE",payload:id});
    }
    const decrease=(id)=>{
        dispatch({type:"DECREASE",payload:id});
    }
    const remove=(id)=>{
        dispatch({type:"REMOVE",payload:id});
    }
    const clearAll=()=>{
        dispatch({type:"CLEAR_ALL"});
    }
    let items=state.items;
    let loading=state.loading;
    let totalPrice=state.totalPrice;
    let totalAmount=state.totalAmount;
    
    
    return (
        <mainContext.Provider 
        value={
            {
                items,
                loading,
                totalPrice,
                totalAmount,
                increase,
                decrease,
                remove,
                clearAll
            }
            } >
            {children}
        </mainContext.Provider>
    )
}

export  {mainContext,MainProvider};