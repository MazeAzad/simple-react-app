import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { mainContext } from "./contex";
const Modal=()=>{
    const {isModalOpen,closeModal}=useContext(mainContext);
    return (

            <div className={`${isModalOpen?"modalContainer show-modal":"modalContainer"}`}>
                <div className="modalContet">
                    <p className="modalText">
                        modal Content
                    </p>
                    <button className="close-modal-btn" onClick={closeModal} >
                    <FaTimes/>
                    </button>
                </div>
            </div>
         
    )
}
export default Modal;