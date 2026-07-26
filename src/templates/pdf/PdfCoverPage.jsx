import {
    A4,
    colors,
    fonts
} from "./pdfStyles";


export default function PdfCoverPage({

    products=[]

}){


    const categories=[

        ...new Set(

            products.map(

                p=>p.type

            )

        )

    ];



    return (

        <div

            style={{

                width:A4.width,

                height:A4.height,

                background:colors.white,

                padding:70,

                boxSizing:"border-box",

                display:"flex",

                flexDirection:"column",

                justifyContent:"space-between"

            }}

        >


            <div

                style={{

                    fontFamily:fonts.mono,

                    color:colors.graphite

                }}

            >

                {new Date()

                    .toLocaleDateString(

                        "es",

                        {

                            month:"long",

                            year:"2-digit"

                        }

                    )

                    .toUpperCase()

                }

            </div>



            <div

                style={{

                    textAlign:"center"

                }}

            >

                <img

                    src="/src/templates/runtime/instagram-story/assets/logo.png"

                    style={{

                        width:120

                    }}

                />


                <h1

                    style={{

                        fontFamily:fonts.display,

                        fontSize:80,

                        margin:20

                    }}

                >

                    EVOTEC

                </h1>


                <h2>

                    Catálogo de espejuelos

                </h2>


            </div>



            <div>

                <p

                    style={{

                        fontFamily:fonts.body

                    }}

                >

                    Colecciones

                </p>


                <div

                    style={{

                        fontFamily:fonts.mono

                    }}

                >

                    {

                        categories.join(" · ")

                    }

                </div>


                <p>

                    Piezas:
                    {" "}
                    {products.length}

                </p>


            </div>


        </div>

    );

}