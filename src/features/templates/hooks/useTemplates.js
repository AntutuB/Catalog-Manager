import { useEffect, useState } from "react";


import {
  getTemplates,
  createTemplate,
  updateTemplate,
  deleteTemplate
} from "../services/templateService";



export function useTemplates(){


  const [templates, setTemplates] = useState([]);



  async function loadTemplates(){

    const data = await getTemplates();

    setTemplates(data);

  }



  async function addTemplate(template){

    await createTemplate(template);

    await loadTemplates();

  }



  async function editTemplate(id,data){

    await updateTemplate(id,data);

    await loadTemplates();

  }



  async function removeTemplate(id){

    await deleteTemplate(id);

    await loadTemplates();

  }



  useEffect(()=>{

    loadTemplates();

  },[]);



  return {

    templates,

    addTemplate,

    editTemplate,

    removeTemplate

  };


}