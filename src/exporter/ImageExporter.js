import ExportEngine from "./ExportEngine";


class ImageExporter {


    async exportPNG(

        node,

        fileName = "export",

        width = 1080,

        height = 1920

    ){


        const canvas = await ExportEngine.render(

            node,

            {

                background:"#ffffff",

                scale:1,

                width,

                height

            }

        );


        const finalCanvas = document.createElement("canvas");


        finalCanvas.width = width;

        finalCanvas.height = height;


        const context = finalCanvas.getContext("2d");


        context.drawImage(

            canvas,

            0,

            0,

            width,

            height

        );


        const link = document.createElement("a");


        link.download = `${fileName}.png`;

        link.href = finalCanvas.toDataURL(

            "image/png"

        );


        link.click();


    }


}


export default new ImageExporter();