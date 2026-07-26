import cover from "./cover.json";

import categoryPage from "./category-page.json";

import theme from "./theme";

import logo from "./assets/logo.png";


export default {

    id:"catalog-a4",

    name:"EVOTEC Catalog A4",

    version:"1.0.0",

    theme,

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