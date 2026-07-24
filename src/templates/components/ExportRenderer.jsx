import { forwardRef } from "react";

import TemplateRenderer from "./TemplateRenderer";

const ExportRenderer = forwardRef(function ExportRenderer(

    {

        template,

        product

    },

    ref

){

    return (

        <div

            style={{

                position:"fixed",

                left:"-100000px",

                top:0

            }}

        >

            <TemplateRenderer

                ref={ref}

                template={template}

                product={product}

            />

        </div>

    );

});

export default ExportRenderer;