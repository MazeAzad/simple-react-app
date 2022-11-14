import {BsTrash} from 'react-icons/bs';
import {BiEdit} from "react-icons/bi";
 
const SingleListItem=({element,removeItem,editItem})=>{
   
    const item=element.item;
    const id=element.id;
    
    return (
        <div className="listItem">
            <p className='item'>{item}</p>
            <BsTrash className='trashIcon' onClick={()=>{removeItem(id)}} />
            <BiEdit className="editIcon" onClick={()=>{editItem(id)}}/>
        </div>
    )
}

export default SingleListItem;