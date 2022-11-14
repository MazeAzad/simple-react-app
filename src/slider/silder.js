import { useEffect, useState } from 'react';
import {GrFormNext,GrFormPrevious} from 'react-icons/gr';
import data from './data';
const people=data;

const Slider=()=>{
    const [index,setIndex]=useState(0);
    let position="review";
    useEffect(()=>{
        if(index> people.length-1){
            setIndex(0);
        }
        if(index< 0)
        {
            setIndex(people.length-1);
        }
    },[index,people])
    useEffect(()=>{
        let slider=setInterval(()=>{
            setIndex(index+1);
        },5000)
        return ()=>{
            clearInterval(slider);
        }
    },[index])
    return (
        
            <div className="slider">
                {people.map((person,personIndex)=>{
                    const {id,image,name,quote,title}=person;
                    if(personIndex===index)
                    {
                        position="active review";
                    }
                    if(personIndex>index)
                    {
                        position="next review";
                    }
                    if(personIndex<index)
                    {
                        position="pre review";
                    }

                    return <div className={position} key={id}>
                        <div className="imageContainer">
                            <img src={image} alt={name}/>
                        </div>
                        <div className="name">{name}</div>
                        <div className="title">{title}</div>
                        <div className="quoteContainer">
                            <p className='quotePragraph'>{quote}</p>
                        </div>
                    </div>
                })}
                <div className="icons">
                    <button className="nextBtn" onClick={()=>{setIndex(index+1)}}>
                        <GrFormNext/>
                    </button>
                    <button className="preBtn" onClick={()=>{setIndex(index-1)}} >
                        <GrFormPrevious/>
                    </button>
                </div>
            </div>
       
    )
}

export default Slider;