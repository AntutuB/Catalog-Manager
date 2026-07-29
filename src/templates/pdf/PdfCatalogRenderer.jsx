import React from "react";

import TemplateRenderer from "../components/TemplateRenderer";

import manifest from "../runtime/catalog-a4";

import PageBuilder from "../engine/PageBuilder";

import CatalogNormalizer from "../../features/catalog/utils/CatalogNormalizer";

export default function PdfCatalogRenderer({

    products = [],

    settings = {}

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