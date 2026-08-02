import { useState } from "react";


function useOthersServicesModal(){


    const [

        isModalOpen,

        setIsModalOpen

    ] = useState(false);



    const [

        editingItem,

        setEditingItem

    ] = useState(null);



    function openCreate(){

        setEditingItem(null);

        setIsModalOpen(true);

    }



    function openEdit(item){

        setEditingItem(item);

        setIsModalOpen(true);

    }



    function closeModal(){

        setEditingItem(null);

        setIsModalOpen(false);

    }



    return {

        isModalOpen,

        editingItem,

        openCreate,

        openEdit,

        closeModal

    };

}


export default useOthersServicesModal;