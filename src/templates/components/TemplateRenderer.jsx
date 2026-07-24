import React, { forwardRef } from "react";

import {
    resolveBinding
} from "../utils/bindingResolver";

import AssetManager from "../assets/AssetManager";


const TemplateRenderer = forwardRef(function TemplateRenderer(
    {
        template,
        product
    },
    ref
){


    function renderElement(element){


        switch(element.type){


            case "background":

                return (

                    <div

                        key={element.id}

                        style={{

                            position:"absolute",

                            left:element.bounds.x,

                            top:element.bounds.y,

                            width:element.bounds.width,

                            height:element.bounds.height,

                            backgroundColor:element.color

                        }}

                    />

                );



            case "asset": {

                const asset =
                    AssetManager.get(
                        element.asset
                    );


                return (

                    <div

                        key={element.id}

                        style={{

                            position:"absolute",

                            left:element.bounds.x,

                            top:element.bounds.y,

                            width:element.bounds.width,

                            height:element.bounds.height,

                            display:"flex",

                            alignItems:"center",

                            justifyContent:"center"

                        }}

                    >

                        {
                            asset &&

                            <img

                                src={asset}

                                alt={element.id}

                                style={{

                                    maxWidth:"100%",

                                    maxHeight:"100%",

                                    objectFit:
                                        element.layout?.fit || "contain"

                                }}

                            />

                        }


                    </div>

                );

            }



            case "image":

                return (

                    <div

                        key={element.id}

                        style={{

                            position:"absolute",

                            left:element.bounds.x,

                            top:element.bounds.y,

                            width:element.bounds.width,

                            height:element.bounds.height,

                            display:"flex",

                            alignItems:"center",

                            justifyContent:"center"

                        }}

                    >

                        {

                            product?.image

                            ?

                            <img

                                src={
                                    URL.createObjectURL(
                                        product.image
                                    )
                                }

                                alt={
                                    product.name || "product"
                                }

                                style={{

                                    width:"100%",

                                    height:"100%",

                                    objectFit:
                                        element.layout?.fit || "contain"

                                }}

                            />

                            :

                            null

                        }


                    </div>

                );



            case "text":

                return (

                    <div

                        key={element.id}

                        style={{

                            position:"absolute",

                            left:element.bounds.x,

                            top:element.bounds.y,

                            width:element.bounds.width,

                            height:element.bounds.height,

                            display:"flex",

                            alignItems:
                                element.layout?.vertical === "center"
                                ?
                                "center"
                                :
                                "center",

                            justifyContent:
                                element.layout?.horizontal === "center"
                                ?
                                "center"
                                :
                                "flex-start",

                            fontSize:
                                element.style?.fontSize,

                            fontWeight:
                                element.style?.fontWeight,

                            textAlign:
                                element.style?.textAlign,

                            color:
                                element.style?.color || "#000"

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



            default:

                return null;


        }


    }



    return (

        <div

            ref={ref}

            style={{

                position:"relative",

                width:template.canvas.width,

                height:template.canvas.height,

                overflow:"hidden",

                background:
                    template.theme.background

            }}

        >

            {

                template.elements.map(

                    renderElement

                )

            }


        </div>

    );


});


export default TemplateRenderer;