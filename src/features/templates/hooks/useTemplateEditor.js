import { updateTemplateElements } from "../services/templateService";


export function useTemplateEditor(){


  async function saveElements(
    templateId,
    elements
  ){

    await updateTemplateElements(
      templateId,
      elements
    );

  }



  return {

    saveElements

  };

}