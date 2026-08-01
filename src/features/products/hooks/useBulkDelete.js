import { useState } from "react";


function useBulkDelete(removeProduct){

    const [

        selectedProducts,

        setSelectedProducts

    ] = useState([]);


    async function deleteSelectedProducts(){

        for(const id of selectedProducts){

            await removeProduct(id);

        }

        setSelectedProducts([]);

    }


    return {

        selectedProducts,

        setSelectedProducts,

        deleteSelectedProducts

    };

}


export default useBulkDelete;
