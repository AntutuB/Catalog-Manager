import { useState } from "react";


function CategoryForm({ onAdd }) {

  const [name, setName] = useState("");


  async function handleSubmit(e){

    e.preventDefault();

    if(!name.trim()) return;


    await onAdd({
      name:name.trim()
    });


    setName("");

  }


  return (

    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Nombre de categoría"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />


      <button type="submit">
        Crear categoría
      </button>


    </form>

  );

}


export default CategoryForm;