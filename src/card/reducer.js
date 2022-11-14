
  const reducer=(state,action)=>{
    const getTotalPrice=(cardArray)=>{
      let count=0;
      cardArray.forEach((card)=>{
        count+=(parseFloat(card.price).toFixed(2))*card.amount;
      })
      return count.toFixed(2);
    }
    const getTotalAmount=(cardArray)=>{
      let count=0;
      cardArray.forEach((card)=>{
        count+=card.amount;
      })
      return count;
    }
    if(action.type==="LOADING_DATA")
    {
        let items=action.payload;
        
        return {...state,
                items:items,
                totalPrice:getTotalPrice(items),
                totalAmount:getTotalAmount(items),
                loading:false,
              }
    }
    if(action.type==="INCREASE")
    {
      const id=action.payload;
      const items=state.items;
 
      items.forEach((item)=>{
        if(item.id===id)
        {
            item.amount+=1;
        }
      })
     
      
      return {...state,
              items:items,
              totalPrice:getTotalPrice(items),
              totalAmount:getTotalAmount(items),
          
             }
 
      
    }
    
    if(action.type==="DECREASE")
    {
      let items=state.items;
      const id=action.payload;
      const item=items.find((item)=>{
        return item.id===id;
      })
      item.amount-=1;
      
      if(item.amount<=0)
      {
        items=items.filter((item)=>{
          return item.id!==id;
        })
      }
       
      return {...state,
              items:items,
              totalPrice:getTotalPrice(items),
              totalAmount:getTotalAmount(items)
             }
    }
  
    if(action.type==="REMOVE")
    {
       const id=action.payload;
       const items=state.items;
       const newItems=items.filter((item)=>{
        return item.id!==id;
       })
       return {
                ...state,
                items:newItems,
                totalPrice:getTotalPrice(newItems),
                totalAmount:getTotalAmount(newItems)
              }
    }

    if(action.type==="CLEAR_ALL")
    {
      return {
                 
                items:[],
                totalPrice:0,
                totalAmount:0

             }
      
    }
    return state;
  }
 
export default reducer;