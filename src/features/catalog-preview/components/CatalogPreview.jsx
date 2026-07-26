import React from "react";

import TemplateLoader from "../../../templates/loader/TemplateLoader";

import CatalogRenderer from "./CatalogRenderer";

import mockCatalog from "../data/mockCatalog";


function CatalogPreview(){

    const template =

        TemplateLoader.load(

            "instagram-story"

        );

    return(

        <div>

            <h1>

                EVOTEC Catalog Preview

            </h1>

            <CatalogRenderer

                template={template}

                catalog={mockCatalog}

            />

        </div>

    );

}

export default CatalogPreview;