import React from "react";

import TemplateRenderer from "../components/TemplateRenderer";

import cover from "../runtime/catalog-a4/cover.json";

import categoryPage from "../runtime/catalog-a4/category-page.json";



export default function PdfCatalogRenderer({

    products=[]

}){


    const grouped={};


    products.forEach(product=>{


        const category = product.type || "Otros";


        if(!grouped[category]){

            grouped[category]=[];

        }


        grouped[category].push(product);


    });



    let pageNumber = 2;



    return(

        <>

            <TemplateRenderer

                template={cover}

                products={products}

                pageNumber={1}

                settings={{

                    brandName:"CATÁLOGO",

                    subtitle:"Mes y Año",

                    description:
                    "Una selección curada de monturas ópticas y de sol, fotografiadas sobre blanco puro para que cada silueta se sostenga por sí sola.",

                    publicationDate:
                    new Date()

                    .toLocaleDateString(

                        "es-ES",

                        {

                            month:"long",

                            year:"numeric"

                        }

                    )

                    .toUpperCase()

                }}

            />



            {

                Object.entries(grouped)

                .map(([category,items])=>(


                    <TemplateRenderer

                        key={category}

                        template={categoryPage}

                        category={{

                            name:category,

                            description:""

                        }}

                        products={

                            items.slice(

                                0,

                                5

                            )

                        }

                        pageNumber={

                            pageNumber++

                        }

                        settings={{

                            brandName:"EVOTEC"

                        }}

                    />


                ))

            }


        </>

    );


}