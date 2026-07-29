import { forwardRef } from "react";

import InstagramTemplateRenderer 
from "../../../templates/components/InstagramTemplateRenderer";


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

            style={{

                position:"absolute",

                width:"0px",

                height:"0px",

                overflow:"hidden",

                pointerEvents:"none"

            }}

        >

            <div

                ref={ref}

                style={{

                    position:"relative",

                    width:`${template.canvas.width}px`,

                    height:`${template.canvas.height}px`,

                    background:"#FFFFFF",

                    overflow:"hidden"

                }}

            >

                <InstagramTemplateRenderer
    template={template}
    product={product}
/>

            </div>

        </div>

    );


}

);


export default ExportRenderer;