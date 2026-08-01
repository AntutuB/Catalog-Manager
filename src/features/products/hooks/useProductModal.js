import { useState } from "react";


function useProductModal(){

    const [

        isModalOpen,

        setIsModalOpen

    ] = useState(false);


    const [

        editingProduct,

        setEditingProduct

    ] = useState(null);


    function openCreate(){

        setEditingProduct(null);

        setIsModalOpen(true);

    }


    function openEdit(product){

        setEditingProduct(product);

        setIsModalOpen(true);

    }


    function closeModal(){

        setEditingProduct(null);

        setIsModalOpen(false);

    }


    return {

        isModalOpen,

        editingProduct,

        openCreate,

        openEdit,

        closeModal

    };

}


export default useProductModal;
