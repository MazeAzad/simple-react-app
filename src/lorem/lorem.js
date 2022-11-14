import { useState } from 'react';
import data from './data';
 
const Lorem=()=>{
    const [count,setCount]=useState(0);
    const [lorem,setLorem]=useState([]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        let newArray=[];
        for(let i=0;i<count;++i)
        {
            newArray.push(data[i]);
        }
        setLorem(newArray);
        
    }
    return(<div className='loremGeneratorContainer'>
            <div className="loremGenerator">
                <h3>lorem genrator</h3>
                <div className="loremFormContainer">
                    <form className='loremForm' onSubmit={handleSubmit}>
                        <label htmlFor="number">number of paragraph</label>
                        <input type="number" id='number' name='number' min="0" max="9" value={count} onChange={(e)=>setCount(e.target.value)}/>
                        <button type='submit'>generate</button>
                    </form>
                </div>
            </div>
            <div className="lorem">
                {lorem.map((l)=>{
                    return <p>{l}</p>
                })}
            </div>

    </div>)
}
export default Lorem;