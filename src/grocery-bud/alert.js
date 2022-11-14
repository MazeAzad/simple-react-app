import { useEffect } from "react";

const Alert=({alert})=>{
    let alertObject=alert[0];
    let setAlertObject=alert[1];
    useEffect(()=>{
       const myTimeOut= setTimeout(()=>{
           setAlertObject({});
        },2000);
        return ()=>{
            clearTimeout(myTimeOut);
        }
    },[alert])
    return(<div className={alertObject.type}>
        {alertObject.msg}
    </div>)
}

export default Alert;