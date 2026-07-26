import React from "react";

import {

    resolveBinding

} from "../../utils/bindingResolver";

function TextRenderer({

    element,

    product

}){

    const bounds = element.bounds;

    return (

        <div

            style={{

                position:"absolute",

                left:bounds.x,

                top:bounds.y,

                width:bounds.width,

                height:bounds.height,

                display:"flex",

                alignItems:"center",

                justifyContent:"center",

                fontSize:
                    element.style?.fontSize,

                fontWeight:
                    element.style?.fontWeight,

                textAlign:
                    element.style?.textAlign,

                color:"#000"

            }}

        >

            {

                resolveBinding(

                    element.binding,

                    product

                )

            }

        </div>

    );

}

export default TextRenderer;