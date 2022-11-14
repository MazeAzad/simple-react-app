
import React ,{useState} from 'react';
import Question from './question';
import data from './data';
const Accordion=()=>{
    const [questions,setQuestions]=useState(data);
    return(
        <div className="mainContainer">
            <div className="QandABanner">
                <p className="banner">
                    Question and Answers About Login
                </p>
            </div>
            <div className="AccordionContainer">
                {
                    questions.map((question)=>{
                        return <Question key={question.id} {...question}/>
                    })
                }
            </div>
        </div>
    ) 
}

export default Accordion;