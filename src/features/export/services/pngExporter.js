import { toPng } from "html-to-image";


export async function exportToPNG(

    element,

    fileName = "catalog-export.png"

){

    if(!element){

        throw new Error(
            "Export element not found"
        );

    }


    console.log(
        "EXPORT ELEMENT",
        element
    );


    console.log(
        "BOUNDING BOX",
        element.getBoundingClientRect()
    );


    const images = element.querySelectorAll("img");


    console.log(
        "EXPORT IMAGES:",
        images.length
    );


    images.forEach(

        (img,index)=>{

            console.log(
                "IMAGE",
                index,
                {
                    src: img.src.substring(0,100),
                    complete: img.complete,
                    width: img.naturalWidth,
                    height: img.naturalHeight
                }
            );

        }

    );


    const dataUrl = await toPng(

        element,

        {

            cacheBust:true,

            pixelRatio:1,

            width:1080,

            height:1920,

            canvasWidth:1080,

            canvasHeight:1920,

            backgroundColor:"#FFFFFF",

            skipFonts:false

        }

    );


    const link=document.createElement("a");


    link.download=fileName;


    link.href=dataUrl;


    document.body.appendChild(link);


    link.click();


    document.body.removeChild(link);


}