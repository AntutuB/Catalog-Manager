import { useEffect, useState } from "react";


function useProductsWithImages(products){

    const [

        productsWithImages,

        setProductsWithImages

    ] = useState([]);


    useEffect(()=>{

        const data = products.map(product=>{

            let imageUrl = null;

            if(product.image){

                imageUrl = URL.createObjectURL(product.image);

            }

            return {

                ...product,

                imageUrl

            };

        });


        setProductsWithImages(data);


        return ()=>{

            data.forEach(product=>{

                if(product.imageUrl){

                    URL.revokeObjectURL(product.imageUrl);

                }

            });

        };

    },[products]);


    return productsWithImages;

}


export default useProductsWithImages;
