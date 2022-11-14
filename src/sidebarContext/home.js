
import {FaBars} from "react-icons/fa";
import { useContext } from "react";
import { mainContext } from "./contex";
const Home=()=>{
    const {openSidebar,openModal}=useContext(mainContext);
    return(
        <main>
            <button className="slide-toggle-btn" onClick={openSidebar}><FaBars/></button>
            <button className="open-modal-btn" onClick={openModal}>show modal</button>
        </main>

    )
}
export default Home;