import { forwardRef } from "react";

import TemplateRenderer from "../../../templates/components/TemplateRenderer";


const ExportRenderer = forwardRef(

function ExportRenderer(

{
    template,
    product
},

ref

){


    if(!template || !product){

        return null;

    }



    return (

        <div

            ref={ref}

            style={{

                position:"fixed",

                left:"0px",

                top:"0px",

                width:`${template.canvas.width}px`,

                height:`${template.canvas.height}px`,

                zIndex:-9999,

                overflow:"hidden",

                background:"#FFFFFF"

            }}

        >

            <TemplateRenderer

                template={template}

                product={product}

            />

        </div>

    );

}

);


export default ExportRenderer;