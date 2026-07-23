import React from "react";


function ElementEditor({
  elements,
  setElements
}) {



  function addElement(type){


    const newElement = {

  id: Date.now(),

  type,

  x:100,

  y:100,

  width:400,

  height:100,

  content:
    type === "text"
    ?
    "{name}"
    :
    "",


  style:{

    fontSize:48,

    fontWeight:"700",

    color:"#000000",

    textAlign:"left"

  }

};


    setElements([

      ...elements,

      newElement

    ]);

  }



  function updateElement(
    id,
    field,
    value
  ){


    setElements(

      elements.map(element =>

        element.id === id

        ?

        {

          ...element,

          [field]:

            [

              "x",

              "y",

              "width",

              "height"

            ].includes(field)

            ?

            Number(value)

            :

            value

        }

        :

        element

      )

    );


  }



  function deleteElement(id){


    setElements(

      elements.filter(

        element =>
          element.id !== id

      )

    );


  }



  return (

    <div>


      <h3>
        Editor de elementos
      </h3>



      <button
        onClick={() =>
          addElement("text")
        }
      >

        Añadir texto

      </button>



      <button
        onClick={() =>
          addElement("price")
        }
      >

        Añadir precio

      </button>



      <button
        onClick={() =>
          addElement("image")
        }
      >

        Añadir imagen

      </button>



      {

        elements.map(

          (element,index)=>(


            <div

              key={element.id}

              style={{

                border:"1px solid #ccc",

                padding:"12px",

                marginTop:"12px"

              }}

            >


              <h4>

                Elemento {index + 1}

              </h4>



              <p>

                Tipo:
                {" "}
                {element.type}

              </p>



              {
                element.type === "text" &&

                <input

                  value={element.content}

                  onChange={(e)=>

                    updateElement(

                      element.id,

                      "content",

                      e.target.value

                    )

                  }

                />

              }



              <label>

                X:

                <input

                  type="number"

                  value={element.x}

                  onChange={(e)=>

                    updateElement(

                      element.id,

                      "x",

                      e.target.value

                    )

                  }

                />

              </label>



              <label>

                Y:

                <input

                  type="number"

                  value={element.y}

                  onChange={(e)=>

                    updateElement(

                      element.id,

                      "y",

                      e.target.value

                    )

                  }

                />

              </label>



              <label>

                Ancho:

                <input

                  type="number"

                  value={element.width}

                  onChange={(e)=>

                    updateElement(

                      element.id,

                      "width",

                      e.target.value

                    )

                  }

                />

              </label>



              <label>

                Alto:

                <input

                  type="number"

                  value={element.height}

                  onChange={(e)=>

                    updateElement(

                      element.id,

                      "height",

                      e.target.value

                    )

                  }

                />

              </label>



              <br/>


              <button

                onClick={()=>

                  deleteElement(

                    element.id

                  )

                }

              >

                Eliminar elemento

              </button>


            </div>


          )

        )

      }


    </div>

  );

}


export default ElementEditor;