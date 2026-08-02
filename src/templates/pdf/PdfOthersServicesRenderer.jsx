import React from "react";


function chunk(array,size){

    const pages=[];

    for(let i=0;i<array.length;i+=size){

        pages.push(

            array.slice(i,i+size)

        );

    }

    return pages;

}


export default function PdfOthersServicesRenderer({

    othersServices=[],

    settings={},

    startingPage=1

}){


    if(othersServices.length===0){

        return null;

    }


    const pages=

        chunk(

            othersServices,

            5

        );


    return(

        <>

            {

                pages.map((items,index)=>(

                    <div

                        key={index}

                        style={{

                            position:"relative",

                            width:794,

                            height:1123,

                            background:"#FFFFFF",

                            overflow:"hidden"

                        }}

                    >

                        {/* HEADER */}

                        <div

                            style={{

                                position:"absolute",

                                left:80,

                                top:45,

                                fontFamily:"Inter",

                                fontSize:11,

                                fontWeight:600,

                                letterSpacing:2

                            }}

                        >

                            EVOTEC - CATÁLOGO

                        </div>


                        <div

                            style={{

                                position:"absolute",

                                right:80,

                                top:45,

                                width:64,

                                textAlign:"right",

                                fontFamily:"Inter",

                                fontSize:11

                            }}

                        >

                            {

                                startingPage+

                                index

                            }

                        </div>


                        <div

                            style={{

                                position:"absolute",

                                left:80,

                                top:75,

                                width:634,

                                height:1,

                                background:"#D8D1C5"

                            }}

                        />


                        {/* TITLE */}

                        <div

                            style={{

                                position:"absolute",

                                left:80,

                                top:150,

                                fontFamily:"Fraunces",

                                fontSize:48,

                                color:"#161512"

                            }}

                        >

                            Servicios y Otros

                        </div>


                        <div

                            style={{

                                position:"absolute",

                                left:80,

                                top:285,

                                width:634,

                                height:1,

                                background:"#D8D1C5"

                            }}

                        />


                        {

                            items.map((item,row)=>(

                                <div

                                    key={item.id}

                                    style={{

                                        position:"absolute",

                                        left:60,

                                        top:

                                            320+

                                            row*126,

                                        width:674,

                                        height:126,

                                        display:"flex",

                                        alignItems:"center",

                                        justifyContent:"space-between",

                                        borderBottom:

                                            "1px solid #E4E1D9"

                                    }}

                                >

                                    <div

                                        style={{

                                            marginLeft:0,

                                            fontFamily:"Fraunces",

                                            fontSize:24,

                                            color:"#161512"

                                        }}

                                    >

                                        {item.name}

                                    </div>


                                    <div

                                        style={{

                                            fontFamily:"Inter",

                                            fontSize:16,

                                            fontWeight:700,

                                            color:"#161512"

                                        }}

                                    >

                                        ${item.price}

                                    </div>

                                </div>

                            ))

                        }


                        {/* FOOTER */}

                        <div

                            style={{

                                position:"absolute",

                                left:80,

                                top:1030,

                                width:634,

                                height:1,

                                background:"#D8D1C5"

                            }}

                        />


                        <div

                            style={{

                                position:"absolute",

                                left:80,

                                top:1050,

                                fontFamily:"Inter",

                                fontSize:10,

                                color:"#716C63"

                            }}

                        >

                            Comercial: +5354879098 +5352940219

                        </div>


                        <div

                            style={{

                                position:"absolute",

                                right:80,

                                top:1050,

                                fontFamily:"Inter",

                                fontSize:10,

                                color:"#716C63"

                            }}

                        >

                            WhatsApp: +39 347 534 2298

                        </div>

                    </div>

                ))

            }

        </>

    );

}