import { useState } from "react";

import Canvas from "../components/Canvas";

import { useEditorData } from "../hooks/useEditorData";


function Editor(){


  const {

    products,

    templates

  } = useEditorData();



  const [selectedProduct,setSelectedProduct] = useState(null);

  const [selectedTemplate,setSelectedTemplate] = useState(null);



  return (

    <section>


      <h2>
        Editor de catálogo
      </h2>



      <select

        onChange={(e)=>{

          const product =
            products.find(
              p=>p.id===Number(e.target.value)
            );

          setSelectedProduct(product);

        }}

      >

        <option>
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

          const template =
            templates.find(
              t=>t.id===Number(e.target.value)
            );

          setSelectedTemplate(template);

        }}

      >

        <option>
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