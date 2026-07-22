import { useState } from "react";


function TemplateForm({
  onAdd
}) {


  const initialState = {

    name:"",
    format:"",
    width:"",
    height:"",
    background:"#ffffff"

  };


  const [form,setForm] = useState(initialState);



  function handleChange(e){

    const {
      name,
      value
    } = e.target;


    setForm({

      ...form,

      [name]:value

    });

  }



  async function handleSubmit(e){

    e.preventDefault();


    if(!form.name.trim()) return;


    await onAdd({

      ...form,

      width:Number(form.width),

      height:Number(form.height),

      createdAt:new Date()

    });


    setForm(initialState);

  }



  return (

    <form onSubmit={handleSubmit}>


      <input

        name="name"

        placeholder="Nombre plantilla"

        value={form.name}

        onChange={handleChange}

      />


      <input

        name="format"

        placeholder="Formato"

        value={form.format}

        onChange={handleChange}

      />


      <input

        name="width"

        type="number"

        placeholder="Ancho px"

        value={form.width}

        onChange={handleChange}

      />


      <input

        name="height"

        type="number"

        placeholder="Alto px"

        value={form.height}

        onChange={handleChange}

      />


      <input

        name="background"

        type="color"

        value={form.background}

        onChange={handleChange}

      />


      <button type="submit">

        Crear plantilla

      </button>


    </form>

  );

}


export default TemplateForm;