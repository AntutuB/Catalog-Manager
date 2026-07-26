import { useRef, useState } from "react";


import TemplateLoader from "../../../templates/loader/TemplateLoader";

import { exportToPNG } from "../services/pngExporter";

import ExportRenderer from "../components/ExportRenderer";

import { imageToDataURL } from "../utils/imageToDataURL";



export function useExporter(){


    const exportRef = useRef(null);



    const [

        exportData,

        setExportData

    ] = useState(null);




    async function exportProductPNG(

        product,

        templateId

    ){


        const template =

            TemplateLoader.load(

                templateId

            );



        const imageData =

            await imageToDataURL(

                product.image

            );



        const exportProduct = {


            ...product,


            imageUrl:imageData


        };



        setExportData({

            template,

            product:exportProduct

        });



        await new Promise(

            resolve=>

                setTimeout(resolve,500)

        );



        await exportToPNG(

            exportRef.current,

            `${product.name}-${templateId}.png`

        );


    }




    return {

        exportRef,

        exportData,

        exportProductPNG,

        ExportRenderer

    };


}