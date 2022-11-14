import React ,{useState} from "react";
import data from './data';
import List from './list';
import './index.css';
const Main=()=>{
    const [people,setPeople]=useState(data);
    const clear=()=>{
        setPeople([]);
    }
    return (
        <main className="appContainer">
            <section>
                <List  people={people}/>
                <h3>{people.length} birthday</h3>
                <button className="btn" onClick={clear}>clear</button>
            </section>
        </main>
    )
}

export default Main;