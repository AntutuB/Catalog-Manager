import { useState } from "react";

import TemplateForm from "../components/TemplateForm";
import TemplateList from "../components/TemplateList";
import TemplateEditor from "./TemplateEditor";

import { useTemplates } from "../hooks/useTemplates";


function Templates() {


  const {

    templates,

    addTemplate,

    removeTemplate

  } = useTemplates();



  const [
    selectedTemplate,
    setSelectedTemplate
  ] = useState(null);



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

        onEdit={setSelectedTemplate}

      />



      {

        selectedTemplate &&

        <TemplateEditor

          template={selectedTemplate}

        />

      }


    </section>

  );

}


export default Templates;