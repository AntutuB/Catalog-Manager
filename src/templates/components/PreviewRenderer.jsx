import TemplateRenderer from "./TemplateRenderer";


function PreviewRenderer({

    template,

    product

}){


    return (

        <div

            style={{

                display:"flex",

                justifyContent:"center",

                transform:"scale(0.35)",

                transformOrigin:"top center",

                height: template.canvas.height * 0.35

            }}

        >

            <TemplateRenderer

                template={template}

                product={product}

            />

        </div>

    );

}


export default PreviewRenderer;