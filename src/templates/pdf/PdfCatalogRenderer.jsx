import React from "react";

import TemplateRenderer from "../components/TemplateRenderer";

import manifest from "../runtime/catalog-a4";

import PageBuilder from "../engine/PageBuilder";

import CatalogNormalizer from "../../features/catalog/utils/CatalogNormalizer";


export default function PdfCatalogRenderer({

    products = []

}) {


    const normalizedProducts =

        CatalogNormalizer.normalize(

            products

        );

         console.log(
    "ORIGINAL PRODUCTS:",
    products
);

console.log(
    "NORMALIZED PRODUCTS:",
    normalizedProducts
);


    const pages =

        PageBuilder.build(

            normalizedProducts,

            manifest

        );


    return (

        <>

            {

                pages.map(page => (

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

                        settings={{

                            brandName:

                                page.type === "cover"

                                    ? "CATÁLOGO"

                                    : "EVOTEC",

                            subtitle:

                                "Mes y Año",

                            description:

                                "Una selección curada de monturas ópticas y de sol.",

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

                ))

            }

        </>

    );

}