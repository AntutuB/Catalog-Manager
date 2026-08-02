import { useEffect, useState } from "react";


import {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
} from "../services/productService";


import {
    getCategories
} from "../../categories/services/categoryService";



export function useProducts(){


    const [products,setProducts] = useState([]);



    async function loadProducts(){


        const [
            productsData,
            categoriesData
        ] = await Promise.all([

            getProducts(),

            getCategories()

        ]);



        const formattedProducts = productsData.map(product => ({


            ...product,


            categoryName:
                categoriesData.find(
                    category =>
                        category.id === product.categoryId
                )?.name || ""


        }));



        setProducts(formattedProducts);


    }



    async function addProduct(product){


        await createProduct(product);

        await loadProducts();


    }



    async function editProduct(id,data){


        await updateProduct(
            id,
            data
        );


        await loadProducts();


    }



    async function removeProduct(id){


        await deleteProduct(id);

        await loadProducts();


    }



    useEffect(()=>{

        loadProducts();

    },[]);



    return {

        products,

        addProduct,

        editProduct,

        removeProduct

    };


}