import React from "react";

function ImageRenderer({

    element,

    product

}){

    const bounds = element.bounds;

    return (

        <img

            src={product.imageUrl}

            alt={product.name}

            style={{

                position:"absolute",

                left:bounds.x,

                top:bounds.y,

                width:bounds.width,

                height:bounds.height,

                objectFit:
                    element.layout?.fit ??
                    "contain"

            }}

        />

    );

}

export default ImageRenderer;