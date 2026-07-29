import { useRef, useState } from "react";

import TemplateLoader from "../../../templates/loader/TemplateLoader";

import { exportToPNG } from "../services/pngExporter";

import { exportToPDF } from "../services/pdfExporter";

import ExportRenderer from "../components/ExportRenderer";

import PdfExportRenderer from "../components/PdfExportRenderer";

import { imageToDataURL } from "../utils/imageToDataURL";



export function useExporter(){


    const exportRef = useRef(null);


    const pdfRef = useRef(null);



    const [

        exportData,

        setExportData

    ] = useState(null);



    const [

        pdfData,

        setPdfData

    ] = useState(null);





    async function exportProductPNG(

        product,

        templateId

    ){


        const template =

            TemplateLoader.load(

                templateId

            );



        let imageData = null;

if(product.image instanceof File){

    imageData =
        await imageToDataURL(
            product.image
        );

}else{

    imageData =
        product.imageUrl ||
        product.image ||
        null;

}

const exportProduct = {

    ...product,

    imageUrl:imageData

};



        setExportData({

            template,

            product:exportProduct

        });



        await new Promise(

            resolve =>

                setTimeout(resolve,500)

        );



        await exportToPNG(

            exportRef.current,

            `${product.name}-${templateId}.png`

        );


    }





    async function exportCatalogPDF(

    products,

    settings

){

    setPdfData({

        products,

        settings

    });

    await new Promise(

        resolve =>

            setTimeout(resolve,500)

    );

    const pages =

        Array.from(

            pdfRef.current.children

        );

    console.log(

        "PDF PAGES:",

        pages.length

    );

    await exportToPDF(

        pages,

        "catalogo.pdf"

    );

}





    return {


        exportRef,

        exportData,

        exportProductPNG,

        ExportRenderer,


        pdfRef,

        pdfData,

        exportCatalogPDF,

        PdfExportRenderer


    };


}