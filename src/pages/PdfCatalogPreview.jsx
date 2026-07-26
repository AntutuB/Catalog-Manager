import PdfCatalogRenderer from "../templates/pdf/PdfCatalogRenderer";



export default function PdfCatalogPreview(){

    const now = new Date();

    const publicationDate = now
        .toLocaleDateString(
            "es-ES",
            {
                month: "long",
                year: "numeric"
            }
        )
        .toUpperCase();



    const settings={

        brandName:"CATÁLOGO",

        publicationDate,

        city:"HABANA, CUBA",

        description:
            "Una selección curada de monturas ópticas y de sol, fotografiadas sobre blanco puro para que cada silueta se sostenga por sí sola."

    };



    const products=[

        {

            id:1,

            brand:"CHIMI",

            name:"Aviator Classic 2",

            type:"Metal",

            price:150

        },

        {

            id:2,

            brand:"RAYBAN",

            name:"Classic Black",

            type:"Sol",

            price:120

        },

        {

            id:3,

            brand:"OAKLEY",

            name:"Sport Vision",

            type:"Deportivo",

            price:180

        },

        {

            id:4,

            brand:"CHIMI",

            name:"Silver Frame",

            type:"Metal",

            price:130

        },

        {

            id:5,

            brand:"GUCCI",

            name:"Luxury Gold",

            type:"Óptico",

            price:250

        },

        {

            id:6,

            brand:"CHIMI",

            name:"Urban Style",

            type:"Metal",

            price:160

        }

    ];



    return(

        <div

            style={{

                background:"#DDDDDD",

                padding:40,

                display:"flex",

                flexDirection:"column",

                gap:40

            }}

        >

            <PdfCatalogRenderer

                products={products}

                settings={settings}

            />

        </div>

    );

}