import React ,{useState} from 'react';
const mainContext=React.createContext();

const MainProvider=({children})=>{
    const [isSidebarOpen,setIsSidebarOpen]=useState(false);
    const [isModalOpen,setIsModalOpen]=useState(false);
    const openSidebar=()=>{
        setIsSidebarOpen(true);
    }
    const closeSidebar=()=>{
        setIsSidebarOpen(false);
    }
    const openModal=()=>{
        setIsModalOpen(true);
    }
    const closeModal=()=>{
        setIsModalOpen(false);
    }

    return(
        <mainContext.Provider 
        value={
            {isSidebarOpen,
            isModalOpen,
            openModal,
            closeModal,
            closeSidebar,
            openSidebar}
            }>
            {children}
        </mainContext.Provider>
    )
}

export {mainContext,MainProvider};