import cover from "./cover.json";
import categoryPage from "./category-page.json";

import logo from "../../../assets/Evotec.svg";


export default {

    id:"catalog-a4",

    name:"EVOTEC Catalog A4",

    version:"1.0.0",


    canvas:{
        width:794,
        height:1123
    },


    background:"#FFFFFF",


    assets:{
        logo
    },


    pages:[
        cover,
        categoryPage
    ]

};


