import React from "react";

import logoImage from "../runtime/catalog-a4/assets/logo.png";

import {
    resolveBinding
} from "../utils/bindingResolver";



function TemplateRenderer({

    template,

    product,

    products,

    category,

    settings,

    pageNumber = 1

}){



    function getImage(item){

        if(!item){

            return null;

        }


        if(item.imageUrl){

            return item.imageUrl;

        }


        if(item.image){

            return URL.createObjectURL(

                item.image

            );

        }


        return null;

    }





    function getContext(){

        return {

            product,

            products,

            category,

            settings,

            page:{

                number:pageNumber

            },

            catalog:{

                productCount:

                    products?.length || 0,

                categoryList:

                    category?.name || ""

            }

        };

    }





    function renderBinding(binding){


        if(!binding){

            return "";

        }


        return resolveBinding(

            binding,

            getContext()

        );


    }







    function baseStyle(element){


        return {


            position:"absolute",

            left:

                element.bounds?.x || 0,


            top:

                element.bounds?.y || 0,


            width:

                element.bounds?.width,


            height:

                element.bounds?.height


        };


    }








    function renderAsset(element){


        return(

            <img

                key={element.id}

                src={logoImage}

                style={{

                    ...baseStyle(element),

                    objectFit:"contain"

                }}

            />

        );


    }







    function renderText(element){


        return(

            <div

                key={element.id}

                style={{

                    ...baseStyle(element),


                    fontSize:

                        element.style?.fontSize,


                    fontWeight:

                        element.style?.fontWeight,


                    textAlign:

                        element.style?.align || "left",


                    color:

                        element.style?.color || "#161512",


                    fontFamily:

                        element.style?.fontFamily || "Inter"


                }}

            >

                {

                    element.value ??

                    renderBinding(

                        element.binding

                    )

                }


            </div>

        );


    }







    function renderLine(element){


        return(

            <div

                key={element.id}

                style={{

                    ...baseStyle(element),

                    height:

                        element.style?.strokeWidth || 1,


                    background:

                        element.style?.color || "#161512"

                }}

            />

        );


    }








    function renderImage(element){


        const image =

            getImage(product);



        if(!image){

            return null;

        }


        return(

            <img

                key={element.id}

                src={image}

                style={{

                    ...baseStyle(element),

                    objectFit:

                        element.fit || "contain"

                }}

            />

        );


    }








    function renderProductList(element){


        if(!products){

            return null;

        }



        return products.map(

            (item,index)=>(


                <div

                    key={

                        item.id ||

                        index

                    }


                    style={{

                        position:"absolute",

                        left:

                            element.bounds.x,


                        top:

                            element.bounds.y +

                            (

                                index *

                                element.rowHeight

                            ),


                        width:

                            element.bounds.width,


                        height:

                            element.rowHeight,


                        display:"flex",


                        alignItems:"center",


                        borderBottom:

                            element.divider

                            ?

                            "1px solid #E4E1D9"

                            :

                            "none"


                    }}

                >



                    <div

                        style={{

                            width:110,

                            height:90

                        }}

                    >

                        {

                            getImage(item)

                            &&

                            <img

                                src={

                                    getImage(item)

                                }

                                style={{

                                    width:"100%",

                                    height:"100%",

                                    objectFit:"contain"

                                }}

                            />

                        }


                    </div>



                    <div

                        style={{

                            marginLeft:30,

                            flex:1

                        }}

                    >


                        <div

                            style={{

                                fontSize:10,

                                color:"#A98650",

                                letterSpacing:2

                            }}

                        >

                            {item.brand}


                        </div>



                        <div

                            style={{

                                fontSize:20,

                                fontFamily:"Fraunces"

                            }}

                        >

                            {item.name}


                        </div>



                        <div

                            style={{

                                fontSize:11,

                                color:"#716C63"

                            }}

                        >

                            {item.type}


                        </div>


                    </div>



                    <div

                        style={{

                            fontSize:15,

                            fontWeight:700

                        }}

                    >

                        ${item.price}


                    </div>



                </div>


            )

        );


    }








    function renderElement(element){


        switch(element.type){


            case "asset":

                return renderAsset(element);



            case "text":

                return renderText(element);



            case "line":

                return renderLine(element);



            case "image":

                return renderImage(element);



            case "productList":

                return renderProductList(element);



            default:

                console.warn(

                    "Unknown template element:",

                    element.type

                );


                return null;


        }


    }








    return(

        <div

            style={{

                position:"relative",

                width:

                    template.canvas.width,


                height:

                    template.canvas.height,


                overflow:"hidden",


                background:

                    template.background ||

                    "#FFFFFF"

            }}

        >

            {

                template.elements?.map(

                    renderElement

                )

            }


        </div>

    );

}


export default TemplateRenderer;