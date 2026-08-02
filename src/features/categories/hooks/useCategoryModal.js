import { useState } from "react";


function useCategoryModal(){


    const [

        isModalOpen,

        setIsModalOpen

    ] = useState(false);



    const [

        editingCategory,

        setEditingCategory

    ] = useState(null);



    function openCreate(){

        setEditingCategory(null);

        setIsModalOpen(true);

    }



    function openEdit(category){

        setEditingCategory(category);

        setIsModalOpen(true);

    }



    function closeModal(){

        setEditingCategory(null);

        setIsModalOpen(false);

    }



    return {

        isModalOpen,

        editingCategory,

        openCreate,

        openEdit,

        closeModal

    };

}


export default useCategoryModal;