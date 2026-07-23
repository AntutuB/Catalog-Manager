import { useState } from "react";


import ElementEditor from "../components/ElementEditor";


import Canvas from "../../editor/components/Canvas";


import { useTemplateEditor } from "../hooks/useTemplateEditor";


import { useProducts } from "../../products/hooks/useProducts";



function TemplateEditor({
  template
}) {



  const [

    elements,

    setElements

  ] = useState(

    template.elements || []

  );



  const {

    products

  } = useProducts();



  const {

    saveElements

  } = useTemplateEditor();



  const [

    selectedProduct,

    setSelectedProduct

  ] = useState(null);




  const previewTemplate = {

    ...template,

    elements

  };





  async function handleSave(){


    await saveElements(

      template.id,

      elements

    );


  }




  return (

    <section>


      <h2>

        Editando:
        {" "}
        {template.name}

      </h2>



      <label>

        Producto:

      </label>



      <select

        onChange={(e)=>{


          const product =

            products.find(

              p =>

              p.id === Number(
                e.target.value
              )

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




      <div

        style={{

          display:"flex",

          gap:"40px"

        }}

      >



        <div>


          <ElementEditor

            elements={elements}

            setElements={setElements}

          />



          <button

            onClick={handleSave}

          >

            Guardar plantilla

          </button>


        </div>




        <div>


          <h3>

            Vista previa

          </h3>



          {

            selectedProduct &&


            <Canvas

              template={previewTemplate}

              product={selectedProduct}

            />


          }


        </div>



      </div>


    </section>

  );

}



export default TemplateEditor;