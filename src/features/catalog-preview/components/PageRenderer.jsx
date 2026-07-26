import React from "react";

import TemplateRenderer from "../../../templates/components/TemplateRenderer";


function PageRenderer({

    template,

    category,

    products,

    pageNumber

}){


    return(

        <div

            style={{

                width:"794px",

                height:"1123px",

                background:"#FFFFFF",

                overflow:"hidden",

                margin:"40px auto",

                boxShadow:"0 0 20px rgba(0,0,0,.15)"

            }}

        >


            <TemplateRenderer

                template={template}

                category={category}

                products={products}

                pageNumber={pageNumber}

            />


        </div>

    );


}


export default PageRenderer;