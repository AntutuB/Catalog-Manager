import { forwardRef, useState } from "react";

import PdfCatalogRenderer
from "../../../templates/pdf/PdfCatalogRenderer";

import PdfOthersServicesRenderer
from "../../../templates/pdf/PdfOthersServicesRenderer";


const PdfExportRenderer = forwardRef(

function PdfExportRenderer(

{

    products,

    othersServices = [],

    settings

},

ref

){

    const [

        catalogPages,

        setCatalogPages

    ] = useState(0);



    return(

        <div

            style={{

                position:"absolute",

                left:-99999,

                top:0,

                pointerEvents:"none"

            }}

        >

            <div

                ref={ref}

            >

                <PdfCatalogRenderer

                    products={products}

                    settings={settings}

                    onPagesGenerated={setCatalogPages}

                />


                {

                    othersServices.length > 0 && (

                        <PdfOthersServicesRenderer

                            othersServices={othersServices}

                            settings={settings}

                            startingPage={
                                catalogPages + 1
                            }

                        />

                    )

                }

            </div>

        </div>

    );

}

);

export default PdfExportRenderer;