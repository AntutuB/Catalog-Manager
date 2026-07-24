import {
    useState
} from "react";


import TemplateLoader from "../../../templates/loader/TemplateLoader";

import TemplateRenderer from "../../../templates/components/TemplateRenderer";



function TemplateEditor({

    templateId

}) {


    const [
        template
    ] = useState(

        () =>
            TemplateLoader.load(templateId)

    );



    return (

        <section>


            <h2>

                {template.name}

            </h2>



            <TemplateRenderer

                template={template}

            />


        </section>

    );

}


export default TemplateEditor;