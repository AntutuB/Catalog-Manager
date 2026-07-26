import { useState } from "react";

import TemplateLoader from "../../../templates/loader/TemplateLoader";

import TemplateRenderer from "../../../templates/components/TemplateRenderer";


function TemplateEditor({
    template
}) {


    const [loadedTemplate] = useState(

        () => TemplateLoader.load(template.id)

    );



    return (

        <section>


            <h2>

                {loadedTemplate.name}

            </h2>



            <div

                style={{

                    display:"flex",

                    justifyContent:"center",

                    transform:"scale(0.35)",

                    transformOrigin:"top center"

                }}

            >

                <TemplateRenderer

                    template={loadedTemplate}

                />

            </div>


        </section>

    );

}


export default TemplateEditor;