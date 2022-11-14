import "./index.css";
import Navbar from "./navbar";
import Card from "./card";
import {MainProvider} from "./context";
import Loading from "./loading";
const Main=()=>{
    
    return (
        <MainProvider>
            <Navbar/>  
            <Card/>  
            <Loading/>  
        </MainProvider>
    )
}
export default Main;