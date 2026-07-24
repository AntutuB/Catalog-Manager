import React from "react";

import {
    resolveBinding
} from "../utils/bindingResolver";


import logoImage from "../runtime/instagram-story/assets/logo.png";



function TemplateRenderer({

    template,

    product

}) {



    function renderElement(element){


        switch(element.type){


            case "background":

                return (

                    <div

                        key={element.id}

                        style={{

                            position:"absolute",

                            left:element.frame.x,

                            top:element.frame.y,

                            width:element.frame.width,

                            height:element.frame.height,

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

                            left:element.frame.x,

                            top:element.frame.y,

                            width:element.frame.width,

                            height:element.frame.height,

                            display:"flex",

                            alignItems:"center",

                            justifyContent:"center"

                        }}

                    >

                        <img

                            src={logoImage}

                            alt={element.id}

                            style={{

                                maxWidth:"100%",

                                maxHeight:"100%",

                                objectFit:"contain"

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

                            left:element.frame.x,

                            top:element.frame.y,

                            width:element.frame.width,

                            height:element.frame.height,

                            display:"flex",

                            alignItems:"center",

                            justifyContent:"center",

                            background:"#ddd"

                        }}

                    >

                        {

                            product?.image

                            ?

                            <img

                                src={URL.createObjectURL(product.image)}

                                alt={product.name}

                                style={{

                                    width:"100%",

                                    height:"100%",

                                    objectFit:element.fit || "contain"

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

                            left:element.frame.x,

                            top:element.frame.y,

                            width:element.frame.width,

                            height:element.frame.height,

                            display:"flex",

                            alignItems:"center",

                            justifyContent:"center",

                            fontSize:element.style?.fontSize,

                            fontWeight:element.style?.fontWeight,

                            textAlign:element.style?.textAlign,

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



            default:

                return null;


        }


    }



    return (

        <div

            style={{

                position:"relative",

                width:template.canvas.width,

                height:template.canvas.height,

                overflow:"hidden",

                background:template.theme.background

            }}

        >

            {

                template.elements.map(renderElement)

            }


        </div>

    );


}



export default TemplateRenderer;