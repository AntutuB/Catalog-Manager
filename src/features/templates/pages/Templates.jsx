import TemplateForm from "../components/TemplateForm";
import TemplateList from "../components/TemplateList";

import { useTemplates } from "../hooks/useTemplates";


function Templates() {


  const {

    templates,

    addTemplate,

    removeTemplate

  } = useTemplates();



  return (

    <section>


      <h2>
        Plantillas
      </h2>



      <TemplateForm

        onAdd={addTemplate}

      />



      <TemplateList

        templates={templates}

        onDelete={removeTemplate}

      />


    </section>

  );

}


export default Templates;