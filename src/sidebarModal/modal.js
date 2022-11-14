import { useState } from "react";
import { FaTimes } from "react-icons/fa";
const Modal=()=>{
    const [modalActive,setModalActive]=useState(false);
    return (
        <>
        <div className="modalContainer">
            <button className="modalBtn" onClick={()=>{setModalActive(!modalActive)}} >
                show modal
            </button>
        </div>
        {modalActive ? <ModalContent array={[modalActive,setModalActive]}/> :""}
        
        </>
   
    )
}
const ModalContent=({array})=>{
    let active =array[0];
    const setActive=array[1];
    return (
        <>
            <div className="modal"></div>
            <div className="modalContent">
                <FaTimes  className="modalIcon" onClick={()=>{setActive(!active)}}/>
                <p className="modalText">
                    modal content
                </p>
            </div>
        </>
    )
}
export default Modal;