import PdfProductRow from "./PdfProductRow";

import {
    A4,
    colors,
    fonts
} from "./pdfStyles";


export default function PdfCategoryPage({

    category,

    products

}){


    return (

        <div

            style={{

                width:A4.width,

                height:A4.height,

                padding:60,

                boxSizing:"border-box",

                background:"#fff"

            }}

        >


            <h1

                style={{

                    fontFamily:fonts.display,

                    fontSize:55

                }}

            >

                {category}

            </h1>



            {

                products.map(

                    (product)=>(

                        <PdfProductRow

                            key={product.id}

                            product={product}

                        />

                    )

                )

            }


        </div>

    );

}