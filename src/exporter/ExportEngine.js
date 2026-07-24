import html2canvas from "html2canvas";

class ExportEngine {

    async render(node, options = {}){

        if(!node){

            throw new Error(
                "Render node not found."
            );

        }

        const canvas = await html2canvas(

    node,

    {

        width: options.width,

        height: options.height,

        windowWidth: options.width,

        windowHeight: options.height,

        backgroundColor: options.background ?? "#ffffff",

        scale: options.scale ?? 1,

        useCORS:true,

        allowTaint:true,

        logging:false

    }

);
        return canvas;

    }

}

export default new ExportEngine();