import TemplateRenderer from "../../../templates/components/TemplateRenderer";


function Canvas({

    template,

    product

}) {


    const maxWidth = 500;

    const maxHeight = 700;



    const scale = Math.min(

        maxWidth / template.canvas.width,

        maxHeight / template.canvas.height

    );



    return (

        <div

            style={{

                width:
                    template.canvas.width * scale,

                height:
                    template.canvas.height * scale,

                overflow:"hidden"

            }}

        >


            <div

                style={{

                    transform:`scale(${scale})`,

                    transformOrigin:"top left"

                }}

            >


                <TemplateRenderer

                    template={template}

                    product={product}

                />


            </div>


        </div>

    );

}



export default Canvas;