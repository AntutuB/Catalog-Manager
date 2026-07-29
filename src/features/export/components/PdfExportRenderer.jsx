import { forwardRef } from "react";

import PdfCatalogRenderer
from "../../../templates/pdf/PdfCatalogRenderer";

const PdfExportRenderer = forwardRef(

function PdfExportRenderer(

{

    products,

    settings

},

ref

){

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

                />

            </div>

        </div>

    );

}

);

export default PdfExportRenderer;