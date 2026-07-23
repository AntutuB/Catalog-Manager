import { useProducts } from "../../products/hooks/useProducts";
import { useTemplates } from "../../templates/hooks/useTemplates";


export function useEditorData(){

  const {
    products
  } = useProducts();


  const {
    templates
  } = useTemplates();



  return {

    products,

    templates

  };

}