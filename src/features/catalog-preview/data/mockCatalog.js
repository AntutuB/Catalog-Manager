const mockCatalog = {

    brand:{
        name:"EVOTEC",
        logo_url:"/logo.png"
    },


    catalog:{
        subtitle:"catálogo de espejuelos",
        description:
        "Una selección de monturas diseñadas para combinar estética, comodidad y precisión.",
        name_line:"EVOTEC · Catálogo"
    },


    edition:{
        eyebrow_left:"JULIO 26",
        eyebrow_right:"Cuba",
        rail_label:"EVOTEC — JULIO 26"
    },


    categories:[

        {
            id:1,
            order:1,
            name:"Metal",
            description:
            "Monturas metálicas de diseño ligero y elegante.",

            products:[

                {
                    id:1,
                    brand:"Chimi",
                    name:"Aviator Classic 2",
                    type_description:
                    "Metal · plateado",

                    sku:"EV-001",

                    price:150,

                    currency_symbol:"$",

                    image_url:null
                },


                {
                    id:2,
                    brand:"RayBan",
                    name:"Classic Gold",

                    type_description:
                    "Metal · dorado",

                    sku:"EV-002",

                    price:180,

                    currency_symbol:"$",

                    image_url:null
                }

            ]
        },


        {

            id:2,

            order:2,

            name:"Sol",

            description:
            "Colección de gafas solares.",


            products:[

                {

                    id:3,

                    brand:"Chimi",

                    name:"Black Edition",

                    type_description:
                    "Acetato · negro",

                    sku:"EV-003",

                    price:200,

                    currency_symbol:"$",

                    image_url:null

                }

            ]

        }

    ]

};


export default mockCatalog;