import React ,{useState} from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const Reviews =({data})=>{
    const [people,setPeople]=useState(data);
    const [person,setPerson]=useState(0);
    const nextPerson =()=>{
        const newPerson=person+1;
        if(newPerson===people.length)
        {
            setPerson(0);
        }else{
            setPerson(newPerson);
        }
    }
    const pervPerson=()=>{
        const newPerson =person-1;
        if(newPerson<0){
            setPerson(people.length-1);
        }else{
            setPerson(newPerson);
        }
    }
    const randomPerson=()=>{
        const randomNumber=Math.floor(Math.random()*people.length);
        setPerson(randomNumber);
    }
    return (
        <div className="reviewContainer">
            <div className="reviewTitle">
                <h1>our reviews</h1>
            </div>
            <div className="underLine"></div>
            <div className="review">
                <div className="imageFrame">
                    <span className="quote-icon"><FaQuoteRight/></span>
                    <div className="imageContainer">
                        <img src={people[person].image} alt={people[person].name} />
                    </div>
                </div>
                <div className="name">
                    <h3 className="nanmeHeadLine">
                        {people[person].name}
                    </h3>
                    <p>
                    {people[person].job}
                    </p>
                </div>
                
                <div className="text"><p>{people[person].text}</p></div>
            </div>
           <div className="buttons">
            <button className="left-btn " onClick={pervPerson}><FaChevronLeft/></button>
            <button className="right-btn " onClick={nextPerson}><FaChevronRight/></button>
           </div>
           <div className="radomButtonContainer">
                <button className="random-btn" onClick={randomPerson}>suprise me</button>
           </div>
        </div>
    )
}

export default Reviews;