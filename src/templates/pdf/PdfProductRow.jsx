import {
    colors,
    fonts
} from "./pdfStyles";


export default function PdfProductRow({

    product

}){


    return (

        <div

            style={{

                display:"flex",

                alignItems:"center",

                height:120,

                borderBottom:`1px solid ${colors.line}`,

                gap:25

            }}

        >


            <div

                style={{

                    width:110,

                    height:95,

                    borderRadius:"50%",

                    background:"#F5F3EE",

                    display:"flex",

                    alignItems:"center",

                    justifyContent:"center"

                }}

            >

                {

                    product.image &&

                    <img

                        src={
                            product.imageUrl ||
                            URL.createObjectURL(product.image)
                        }

                        style={{

                            width:"90px",

                            height:"90px",

                            objectFit:"contain"

                        }}

                    />

                }


            </div>



            <div

                style={{

                    flex:1

                }}

            >

                <div

                    style={{

                        fontFamily:fonts.mono,

                        color:colors.brass,

                        fontSize:10,

                        textTransform:"uppercase"

                    }}

                >

                    {product.brand || ""}

                </div>



                <div

                    style={{

                        fontFamily:fonts.display,

                        fontSize:20,

                        color:colors.ink

                    }}

                >

                    {product.name}

                </div>



                <div

                    style={{

                        fontFamily:fonts.body,

                        fontSize:12,

                        color:colors.graphite

                    }}

                >

                    {product.type || ""}

                </div>


            </div>



            <div

                style={{

                    fontFamily:fonts.mono,

                    fontSize:15,

                    fontWeight:"bold"

                }}

            >

                ${product.price || ""}

            </div>


        </div>

    );

}