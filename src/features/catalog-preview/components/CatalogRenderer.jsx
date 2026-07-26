import React from "react";

import PageRenderer from "./PageRenderer";


function CatalogRenderer({

    template,

    catalog

}){


    const pages=[];



    /*
        PORTADA
    */

    const coverPage =

        template.pages.find(

            page => page.id === "cover"

        );


    if(coverPage){

        pages.push({

            template:coverPage,

            category:null,

            products:[]

        });

    }





    /*
        PAGINAS DE CATEGORIAS

        5 productos por página

    */


    const categoryTemplate =

        template.pages.find(

            page =>

                page.id === "category-page"

        );



    catalog.categories.forEach(

        category=>{


            const products =

                category.products || [];



            for(

                let i = 0;

                i < products.length;

                i += 5

            ){


                pages.push({

                    template:

                        categoryTemplate,


                    category,


                    products:

                        products.slice(

                            i,

                            i + 5

                        )


                });


            }


        }

    );






    return(

        <>


        {

            pages.map(

                (page,index)=>(


                    <PageRenderer

                        key={index}


                        template={page.template}


                        category={page.category}


                        products={page.products}


                        pageNumber={index + 1}

                    />


                )

            )

        }


        </>


    );


}


export default CatalogRenderer;