import React from "react";

import { resolveBinding } from "../utils/bindingResolver";

import AssetManager from "../assets/AssetManager";



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

            return URL.createObjectURL(item.image);

        }

        return null;

    }





    function getContext(){

        return{

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

                    Array.from(

                        new Set(

                            (products || [])

                            .map(

                                p=>p.type

                            )

                        )

                    ).join(" · ")

            }

        };

    }


function fitText(

    text,

    maxLength,

    startSize,

    minSize

){

    if(!text){

        return startSize;

    }

    if(text.length <= maxLength){

        return startSize;

    }

    const overflow =

        text.length - maxLength;

    const size =

        startSize -

        Math.ceil(

            overflow / 4

        );

    return Math.max(

        minSize,

        size

    );

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

        return{

            position:"absolute",

            left:

                element.bounds?.x || 0,

            top:

                element.bounds?.y || 0,

            width:

                element.bounds?.width,

            height:

                element.bounds?.height,

            boxSizing:"border-box"

        };

    }





    function renderAsset(element){

    const assetName =

        element.asset ||

        element.name ||

        element.value;


    const asset =

        AssetManager.get(assetName);

        console.log(
    "ASSET URL:",
    asset
);


    if(!asset){

        console.warn(

            `Asset "${assetName}" not found.`

        );

        return null;

    }


    return(

        <img

            key={element.id}

            src={asset}

            alt={element.id}

            style={{

                ...baseStyle(element),

                objectFit:

                    element.fit ||

                    "contain"

            }}

        />

    );

}





    function renderText(element){

    const theme = template.theme || {};

    const colors = theme.colors || {};

    const fonts = theme.fonts || {};

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

                    element.style?.color ||

                    colors.primary ||

                    "#161512",

                fontFamily:

                    element.style?.fontFamily ||

                    fonts.body ||

                    "Inter",

                letterSpacing:

                    element.style?.letterSpacing,

                lineHeight:

                    element.style?.lineHeight

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

    const theme = template.theme || {};

    const colors = theme.colors || {};

    return(

        <div

            key={element.id}

            style={{

                ...baseStyle(element),

                height:

                    element.style?.strokeWidth || 1,

                background:

                    element.style?.color ||

                    colors.divider ||

                    "#D8D1C5"

            }}

        />

    );

}





    function renderProductList(element){

    if(!products){

        return null;

    }

    const layout = element.layout || {};

    const image = element.image || {};

    const content = element.content || {};

    const brand = element.brand || {};

    const name = element.name || {};

    const typeLabel = element.typeLabel || {};

    const price = element.price || {};

    const divider = element.divider || {};

    const rowHeight = layout.rowHeight || 126;

    const gap = layout.gap || 0;

    return products.map((item,index)=>(

        <div

            key={item.id || index}

            style={{

                position:"absolute",

                left:element.bounds.x,

                top:

                    element.bounds.y +

                    index * (rowHeight + gap),

                width:element.bounds.width,

                height:rowHeight,

                display:"flex",

                alignItems:"center",

                borderBottom:

                    divider.enabled === false

                        ? "none"

                        : `${divider.width || 1}px solid ${divider.color || "#E4E1D9"}`

            }}

        >

            <div

                style={{

                    width:image.width || 110,

                    height:image.height || 90,

                    flexShrink:0

                }}

            >

                {

                    getImage(item) &&

                    <img

                        src={getImage(item)}

                        style={{

                            width:"100%",

                            height:"100%",

                            objectFit:image.fit || "contain"

                        }}

                    />

                }

            </div>

            <div

                style={{

                    marginLeft:content.offsetX || 30,

                    flex:1

                }}

            >

                <div

                    style={{

                        fontFamily:

                            brand.fontFamily ||

                            "IBM Plex Mono",

                        fontSize:

                            brand.fontSize ||

                            10,

                        color:

                            brand.color ||

                            "#A98650",

                        letterSpacing:

                            brand.letterSpacing ||

                            2

                    }}

                >

                    {item.brand}

                </div>

                <div

                    style={{

                        fontFamily:

                            name.fontFamily ||

                            "Fraunces",

                        fontSize:

                            name.fontSize ||

                            20,

                        fontWeight:

                            name.fontWeight ||

                            400,

                        color:

                            name.color ||

                            "#161512"

                    }}

                >

                    {item.name}

                </div>

                <div

                    style={{

                        fontFamily:

                            typeLabel.fontFamily ||

                            "Inter",

                        fontSize:

                            typeLabel.fontSize ||

                            11,

                        color:

                            typeLabel.color ||

                            "#716C63"

                    }}

                >

                    {item.type}

                </div>

            </div>

            <div

                style={{

                    fontFamily:

                        price.fontFamily ||

                        "Inter",

                    fontSize:

                        price.fontSize ||

                        15,

                    fontWeight:

                        price.fontWeight ||

                        700,

                    color:

                        price.color ||

                        "#161512",

                    textAlign:

                        price.align ||

                        "right"

                }}

            >

                ${item.price}

            </div>

        </div>

    ));

}





    function renderElement(element){

        switch(element.type){

            case"asset":

                return renderAsset(element);

            case"text":

                return renderText(element);

            case"line":

                return renderLine(element);

            case"productList":

                return renderProductList(element);

            default:

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

                template.elements.map(

                    renderElement

                )

            }

        </div>

    );

}



export default TemplateRenderer;