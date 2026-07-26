import React, {
    useEffect,
    useState
} from "react";


import PdfCatalogRenderer from "../templates/pdf/PdfCatalogRenderer";


import {
    getProducts
} from "../features/products/services/productService";


import CatalogNormalizer from "../features/catalog/utils/CatalogNormalizer";



export default function PdfCatalogPreview(){


    const [products,setProducts] = useState([]);


    const [loading,setLoading] = useState(true);



    useEffect(()=>{


        async function loadCatalog(){


            const data = await getProducts();


            const normalized =

                CatalogNormalizer.normalize(
                    data
                );


            console.log(
                "PDF PRODUCTS:",
                normalized
            );


            setProducts(normalized);


            setLoading(false);


        }


        loadCatalog();


    },[]);





    const now = new Date();


    const publicationDate = now

        .toLocaleDateString(

            "es-ES",

            {

                month:"long",

                year:"numeric"

            }

        )

        .toUpperCase();





    const settings={


        brandName:"CATÁLOGO",


        publicationDate,


        city:"HABANA, CUBA",


        description:

            "Una selección curada de monturas ópticas y de sol, fotografiadas sobre blanco puro para que cada silueta se sostenga por sí sola."

    };





    if(loading){


        return (

            <div>

                Cargando catálogo...

            </div>

        );

    }





    return(


        <div


            style={{


                background:"#DDDDDD",


                padding:40,


                display:"flex",


                flexDirection:"column",


                gap:40


            }}


        >


            <PdfCatalogRenderer


                products={products}


                settings={settings}


            />


        </div>


    );


}