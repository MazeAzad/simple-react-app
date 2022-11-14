import {FaMinusCircle , FaPlusCircle  } from 'react-icons/fa';
import React, {useState} from 'react';
const Question =({title,info})=>{
    const [showInfo,setShowInfo]=useState(false);
    return (
        <article className="QAndAContainer">
            <div className="title">
                <h4>{title}</h4>
                <button className='btn'  onClick={()=>{setShowInfo(!showInfo)}}>
                    {showInfo ?  <FaMinusCircle/> : <FaPlusCircle/>}
                </button>
            </div>
            <div className="answer">
                {showInfo &&<p>{info}</p>}
            </div>
        </article>
    )
};

export default Question;