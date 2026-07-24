import { useProducts } from "../../products/hooks/useProducts";


import {
    getTemplates
} from "../../../templates/services/templateRegistryService";



export function useEditorData(){


    const {

        products

    } = useProducts();



    const templates = getTemplates();



    return {


        products,

        templates


    };


}