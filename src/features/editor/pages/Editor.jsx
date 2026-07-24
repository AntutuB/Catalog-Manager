import { useState } from "react";


import Canvas from "../components/Canvas";

import { useEditorData } from "../hooks/useEditorData";


import TemplateLoader from "../../../templates/loader/TemplateLoader";



function Editor(){


    const {

        products,

        templates

    } = useEditorData();



    const [
        selectedProduct,
        setSelectedProduct
    ] = useState(null);



    const [
        selectedTemplate,
        setSelectedTemplate
    ] = useState(null);




    return (

        <section>


            <h2>

                Editor de catálogo

            </h2>




            <select

                onChange={(e)=>{


                    const product =

                        products.find(

                            p =>

                            p.id === Number(e.target.value)

                        );



                    setSelectedProduct(product);


                }}

            >


                <option value="">

                    Seleccionar producto

                </option>



                {

                    products.map(product=>(

                        <option

                            key={product.id}

                            value={product.id}

                        >

                            {product.name}

                        </option>

                    ))

                }


            </select>





            <select

                onChange={(e)=>{


                    if(!e.target.value){

                        setSelectedTemplate(null);

                        return;

                    }



                    const template =

                        TemplateLoader.load(

                            e.target.value

                        );



                    setSelectedTemplate(template);



                }}

            >


                <option value="">

                    Seleccionar plantilla

                </option>



                {

                    templates.map(template=>(

                        <option

                            key={template.id}

                            value={template.id}

                        >

                            {template.name}

                        </option>

                    ))

                }


            </select>





            {

                selectedProduct &&

                selectedTemplate &&


                <Canvas

                    template={selectedTemplate}

                    product={selectedProduct}

                />

            }



        </section>

    );

}



export default Editor;