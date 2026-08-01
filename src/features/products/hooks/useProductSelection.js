function useProductSelection(

    selectedProducts,

    setSelectedProducts,

    filteredProducts

){

    function toggleProductSelection(id){

        if(selectedProducts.includes(id)){

            setSelectedProducts(

                selectedProducts.filter(

                    productId => productId !== id

                )

            );

        }else{

            setSelectedProducts([

                ...selectedProducts,

                id

            ]);

        }

    }



    function toggleAllProducts(){

        if(

            selectedProducts.length === filteredProducts.length

        ){

            setSelectedProducts([]);

        }else{

            setSelectedProducts(

                filteredProducts.map(

                    product => product.id

                )

            );

        }

    }



    function clearSelection(){

        setSelectedProducts([]);

    }



    return {

        toggleProductSelection,

        toggleAllProducts,

        clearSelection

    };

}

export default useProductSelection;
