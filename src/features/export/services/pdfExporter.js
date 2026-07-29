import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export async function exportToPDF(

    pages,

    filename = "catalogo.pdf"

){

    if(!pages || pages.length === 0){

        return;

    }

    const pdf = new jsPDF({

        orientation:"portrait",

        unit:"px",

        format:[

            794,

            1123

        ]

    });

    for(

        let i = 0;

        i < pages.length;

        i++

    ){

        console.log(
    "DOM SIZE:",
    pages[i].offsetWidth,
    pages[i].offsetHeight,
    pages[i].getBoundingClientRect()
);

        const canvas = await html2canvas(

            pages[i],

            {

                scale:4,

                backgroundColor:"#FFFFFF",

                useCORS:true

            }

        );

        console.log(
    "CANVAS SIZE:",
    canvas.width,
    canvas.height
);

        const image =

            canvas.toDataURL(

                "image/png"

            );

        if(i>0){

            pdf.addPage();

        }

        console.log(
    "PDF PAGE SIZE:",
    pdf.internal.pageSize.getWidth(),
    pdf.internal.pageSize.getHeight()
);

        pdf.addImage(
    image,
    "PNG",
    0,
    0,
    794,
    1123,
    undefined,
    "FAST"
);

    }

    pdf.save(filename);

}