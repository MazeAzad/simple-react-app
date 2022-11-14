import SingleListItem from "./singleListItem";
const List=({items,removeItem,editItem})=>{
     

    return(
        <div className="list">
            {items.map((element)=>{
                 return (
                    <SingleListItem element={element}  key={element.id}  removeItem={removeItem} editItem={editItem}  />
                )
            })}
        </div>
    )
}
export default List;