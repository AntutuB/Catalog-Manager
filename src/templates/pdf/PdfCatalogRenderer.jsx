import React, { useEffect } from "react";

import TemplateRenderer from "../components/TemplateRenderer";

import manifest from "../runtime/catalog-a4";

import PageBuilder from "../engine/PageBuilder";

import CatalogNormalizer from "../../features/catalog/utils/CatalogNormalizer";

export default function PdfCatalogRenderer({

    products = [],

    settings = {},

    onPagesGenerated

}){

    const normalizedProducts =

        CatalogNormalizer.normalize(

            products

        );

    const pages =

            PageBuilder.build(

                normalizedProducts,

                manifest

            );


        useEffect(()=>{

    if(onPagesGenerated){

        onPagesGenerated(
            pages.length
        );

    }

},[
    pages.length,
    onPagesGenerated
]);

    return(

        <>

            {

                pages.map(page=>(

                    <TemplateRenderer

                        key={page.pageNumber}

                        template={page.template}

                        products={

                            page.products ||

                            normalizedProducts

                        }

                        category={

                            page.category

                        }

                        pageNumber={

                            page.pageNumber

                        }

                        settings={

                            settings

                        }

                    />

                ))

            }

        </>

    );

}