import React, { useState } from "react";
const TourList=({data})=>
{
    const [tours,setTours]=useState(data);
    
    const deleteTour=(id)=>{
        const newTours=tours.filter((tour)=>{
           return tour.id!==id;
        })
       setTours(newTours);
    }
     
    const [readMore,setReadMore]=useState(true);
    let flag;
    if(tours.length===0)
    {
        flag=true;
    }
    return (
        <div className="tourListContainer">
            {flag && <div className="noTour">no tour left</div>} 
                {tours.map((tour)=>{
                    const {id,image,info,name,price}=tour;
                     
                    return <div className="tour" key={id}>
                        <div className="tourImageContainer">
                            <img src={image} alt={name} />
                        </div>
                        <div className="info">
                            <h3>{name}</h3>
                            <h4>{price}</h4>
                            <p >{readMore? info.substring(0,200) :info }
                            <button className="readmore" onClick={()=>{setReadMore(!readMore)}}>{readMore ? "read more" : "read less"}</button>
                            </p>
                            
                            
                        </div>
                        <button className="btn" onClick={()=>{deleteTour(id)}} >not interstest</button>
                    </div>
                })}
        
        </div>
    )
}

export default TourList;