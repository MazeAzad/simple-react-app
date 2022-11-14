import React ,{useState}  from "react";
import data from './data';
const Menu=()=>{
    let [items,setItems]=useState(data);
    const filterItem=(categoryName)=>{
        items=data;
        const newItems=items.filter((item)=>{
            return item.category===categoryName;
        })
        if(newItems.length===0)
        {
            setItems(data)
        }else
        { 
            setItems(newItems);
        }
       
        
    }
    return(
        <div className="appContainer">
            <div className="title">
                <h2>Our Menu</h2>
                <div className="underline"></div>
            </div>
            <div className="category">
                <button className="btn-category" onClick={()=> filterItem(" ")}>All</button>
                <button className="btn-category" onClick={()=> filterItem("breakfast")} >Breakfast</button>
                <button className="btn-category" onClick={()=>filterItem("lunch")}>Lunch</button>
                <button className="btn-category"  onClick={()=>filterItem("shakes")}>Shakes</button>
            </div>
            <div className="menuItemsContainer">
                
                    {items.map((item)=>{
                        const {id,title,category,img,desc,price}=item;
                        
                        return <div className="menuItem" key={id}>
                            <div className="imageContainer">
                                <img src={img} alt={title} />
                            </div>
                            <div className="textContainer">
                                <div className="titleText">
                                    <h4>{title}</h4>
                                    <h5>${price}</h5>
                                </div>
                                <hr />
                                <div className="desc">
                                    <p>{desc}</p>
                                </div>
                            </div>
                        </div>
                    })}
                 

            </div>
        </div>
    )
}

export default Menu;