import "./index.css";
import Home from "./home";
import Sidebar from "./sidebar";
import { MainProvider } from "./contex";
import Modal from "./modal";
const Main=()=>{
    return(
        <MainProvider>
             <Home/>
             <Sidebar/>
             <Modal/>
        </MainProvider>
       
        
    )
}

export default Main;