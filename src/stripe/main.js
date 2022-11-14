import { MainProvider } from "./context";
import "./index.css";
import Navbar from "./navbar";
import Hero from "./hero";
import Sidebar from "./sidebar";
import Submenu from "./submenu";
const Main=()=>{

    return(
        <MainProvider>
            <Navbar/>
            <Hero/>
            <Sidebar/>
            <Submenu/>
        </MainProvider>
    )
}

export default Main;