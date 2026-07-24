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



            case "asset":

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

                        <img

                            src={
                                AssetManager.get(
                                    element.asset
                                )
                            }

                            alt={element.id}

                            style={{

                                maxWidth:"100%",

                                maxHeight:"100%",

                                objectFit:
                                    element.layout?.fit || "contain"

                            }}

                        />

                    </div>

                );



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

                                alt={product.name}

                                style={{

                                    width:"100%",

                                    height:"100%",

                                    objectFit:
                                        element.layout?.fit || "contain"

                                }}

                            />

                            :

                            "IMAGE"

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

                            alignItems:"center",

                            justifyContent:"center",

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