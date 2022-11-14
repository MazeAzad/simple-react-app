import { useState } from "react";
import List from "./list";
import "./index.css";
import Alert from "./alert";
import { useEffect } from "react";
const getLocalStorage=()=>{
    let list=localStorage.getItem("list");
    if(list){
        return  JSON.parse( localStorage.getItem("list"));
    }else{
        return [];
    }
}
const Main=()=>{
    const[edit,setEdit]=useState(false);
    let [items,setItems]=useState(getLocalStorage());
    let [grocery,setGrocery]=useState("");
    let [id,setId]=useState(null);
    let [alertObject,setAlertObject]=useState({type:"",msg:""});
   
    const handleSubmit=(e)=>{
        e.preventDefault();
       
            if(!edit)
            {
                let itemValue=grocery;
                addItem(itemValue);
                setAlertObject({type:"success",msg:"item added"})
                setGrocery("");
                
            }else{
                let item=items.find((item)=>{
                    return item.id===id;
                })
                item.item=grocery;
                setItems(items);
                setEdit(false);
                setAlertObject({type:"success",msg:"item edited"});
                setGrocery("");
                 
            }
        
 

       
    }

    useEffect(()=>{
        localStorage.setItem("list",JSON.stringify(items));
         
    },[items])
    const [counter,setCounter]=useState(0)
    const addItem=(item)=>{
        const itemObject={
            item:item,
            id:counter
        }
        setCounter(counter+1);
        setItems([...items,itemObject]);
    }
    
    const removeItem=(id)=>{
        const newItem=items.filter((item)=>{
            return item.id!==id;
        })
        setItems(newItem);
        setAlertObject({type:"danger",msg:"item deleted"});
    }
    const editItem=(id)=>{
        let item=items.find((item)=>{
            return item.id===id;
        })
        setGrocery(item.item);
        setEdit(true);
        setId(id);
    }
    const clearAll=()=>{
        setItems([]);
    }
    return (
    <div className="mainContainer">
        <div className="title">
            <h2>Grocery Bud</h2>
        </div>
        <Alert alert={[alertObject,setAlertObject]} />
        <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <input type="text" id="item" placeholder="e.g eggs" value={grocery} onChange={(e)=>{setGrocery(e.target.value)}} />
                    <button type="submit" className="btn-submit">{edit? "edit" : "submit"}</button>
                </form> 
        </div>
        <div className="listContainer">
            <List items={items}  removeItem={removeItem} editItem={editItem} />
        </div>
        {items.length ? <div className="btnContainer"><button className="clearAllBtn" onClick={clearAll}>clear all</button></div>: <p className="noItem">no item left</p>}
    </div>
    )
}

export default Main;