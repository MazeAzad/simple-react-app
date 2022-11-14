import { mainContext } from "./context";
import { useContext  } from "react";
import {HiOutlineArrowUp,HiOutlineArrowDown} from "react-icons/hi"
const Card=()=>{
    const {items,loading,totalPrice,increase,decrease,remove,clearAll}=useContext(mainContext);
     
    const cards=items;
    return (
        <div className={`${loading? "cardList":"cardList show-card"}`}>
            {cards.map((card)=>{
                const{id,title,price,img,amount}=card;
                
                return (
                    <div className="card" key={id}>
                        <div className="cardItem">
                            <div className="cardImageContainer">
                                <img src={img} alt="image" />
                            </div>
                            <div className="cardInfo">
                                <p className="title">{title}</p>
                                <p className="price">{price}</p>
                                <button className="removeBtn" onClick={()=>{remove(id)}}>remove</button>
                            </div>
                        </div>
                        <div className="amountContainer">
                            <div className="amount">
                                <button className="btn increaseBtn" onClick={()=>increase(id)}><HiOutlineArrowUp/></button>
                                <div className="amountCounter">{amount}</div>
                                <button className="btn decreaseBtn" onClick={()=>decrease(id)}><HiOutlineArrowDown/></button>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className="underLine"></div>
            <div className="totalContainer">
                <div className="totalTitle">Total</div>
                <div className="totalAmount">{totalPrice}</div>
            </div>
            <button className="clearBtn" onClick={clearAll}>Clear Cards</button>
        </div>
    )
}
export default Card;