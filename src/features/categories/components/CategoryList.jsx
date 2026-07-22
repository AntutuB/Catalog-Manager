import { useState } from "react";


function CategoryList({
  categories,
  onDelete,
  onEdit
}) {


  const [editingId, setEditingId] = useState(null);

  const [editingName, setEditingName] = useState("");



  function startEdit(category){

    setEditingId(category.id);

    setEditingName(category.name);

  }



  async function saveEdit(id){

    if(!editingName.trim()) return;


    await onEdit(id,{
      name: editingName.trim()
    });


    setEditingId(null);

    setEditingName("");

  }



  return (

    <ul>

      {
        categories.map((category)=>(

          <li key={category.id}>


            {
              editingId === category.id ?

              (

                <>

                  <input
                    value={editingName}
                    onChange={(e)=>
                      setEditingName(e.target.value)
                    }
                  />


                  <button
                    onClick={()=>
                      saveEdit(category.id)
                    }
                  >
                    Guardar
                  </button>

                </>

              )

              :

              (

                <>

                  <span>
                    {category.name}
                  </span>


                  <button
                    onClick={()=>
                      startEdit(category)
                    }
                  >
                    Editar
                  </button>


                  <button
                    onClick={()=>
                      onDelete(category.id)
                    }
                  >
                    Eliminar
                  </button>

                </>

              )

            }


          </li>

        ))
      }

    </ul>

  );

}


export default CategoryList;